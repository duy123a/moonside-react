import { Post } from '@/types/postsType';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

export interface PostModalProps {
  post: Post;
  openState: boolean;
  handleClose: (...event: any[]) => void;
  handleDeletePost: (...event: any[]) => void;
}

export default function PostModal({
  post,
  openState,
  handleClose,
  handleDeletePost,
}: PostModalProps) {
  return (
    <Dialog
      open={openState}
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
        <Button onClick={handleClose}>Cancel</Button>
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
  );
}
