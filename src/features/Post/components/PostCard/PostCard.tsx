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
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia component="img" height="118" image={post.imageUrl} alt={post.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateText(post.description, 100)}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            {`by ${post.author} - ${dayjs(post.updatedAt).fromNow()}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
