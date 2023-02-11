import * as React from 'react';
import { Post } from '@/types/postsType';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CardActionArea, CardActions } from '@mui/material';
import { RerenderContext, truncateText } from '@/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import postApi from '@/apis/postsApi';
dayjs.extend(relativeTime);

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  //  Quill compatible (not render on quill styles, this required quill.js)
  let description: string = '';
  if (typeof post.description !== 'undefined') {
    if (typeof post.description !== 'string') {
      description = post.description[0].insert;
    } else {
      description = post.description;
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const rerendering = React.useContext(RerenderContext);

  const handleCardClick = () => {
    navigate({
      pathname: `${location.pathname}/${post.id}`,
    });
  };

  const handleEditButtonClick = () => {
    navigate({
      pathname: `${location.pathname}/edit/${post.id}`,
    });
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await postApi.remove(postId);
      setOpen(false);
      rerendering();
    } catch (error) {
      console.log('failed to delete post', error);
    }
  };

  return (
    <Box>
      <Card sx={{ width: '100%' }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia component="img" height="118" image={post.imageUrl} alt={post.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncateText(description, 115)}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={2}>
              {`by ${post.author} - ${dayjs(post.updatedAt).fromNow()}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleEditButtonClick}>Edit</Button>
          <Button onClick={handleClickOpen}>Delete</Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Do you want to delete this post?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete post{' '}
            <Typography component={'span'} sx={{ display: 'inline', color: 'primary.main' }}>
              {post.title}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleDeletePost(post.id);
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
