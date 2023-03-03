import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Post } from '@/types/postsType';

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
