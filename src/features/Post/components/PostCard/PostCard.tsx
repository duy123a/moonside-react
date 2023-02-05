import * as React from 'react';
import { Post } from '@/types/postsType';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { truncateText } from '@/utils';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  // Support Quill module
  let description: string | undefined = '';
  if (typeof post.description !== 'string' && typeof post.description !== 'undefined') {
    description = post.description[0].insert;
  } else {
    description = post.description;
  }

  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
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
    </Card>
  );
}
