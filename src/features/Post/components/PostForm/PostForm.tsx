import * as React from 'react';
import Box from '@mui/material/Box';
import { Post } from '@/types/postsType';
import { useForm } from 'react-hook-form';
import InputField from '@/components/FormControl/InputField';
import TextareaField from '@/components/FormControl/TextareaField';
import RadioField from '@/components/FormControl/RadioField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadField from '@/components/FormControl/UploadField';

export interface PostFormProps {
  post?: Post;
  onSubmit?: (...event: any[]) => void;
}

export default function PostForm({ post, onSubmit }: PostFormProps) {
  const [bannerValue, setBannerValue] = React.useState('1');

  const form = useForm({
    defaultValues: {
      title: '',
      author: '',
      image: '',
      imageUrl: '',
      description: '',
      imageSource: '1',
    },
  });

  const handleRadioChange = (value: string) => {
    setBannerValue(value);
  };

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  console.log('Banner value realtime', bannerValue);

  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="title" label="Title" control={form.control}></InputField>
        <InputField name="author" label="Author" control={form.control}></InputField>
        <Box sx={{ display: 'none' }}>
          <InputField name="imageUrl" label="imageUrl" control={form.control}></InputField>
        </Box>
        <TextareaField
          name="description"
          label="Description"
          control={form.control}
        ></TextareaField>
        <Box mt={1}>
          <FormControl>
            <FormLabel>Banner</FormLabel>
            <RadioField
              name="imageSource"
              control={form.control}
              customOnChange={handleRadioChange}
            ></RadioField>
          </FormControl>
        </Box>
        <Box mt={1} sx={{ display: bannerValue === '1' ? 'block' : 'none' }}>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Typography>We're using Picsum service to get a random image.</Typography>
            <Button variant="contained" color="primary">
              Change post image
            </Button>
          </FormControl>
        </Box>
        <Box mt={1} sx={{ display: bannerValue === '2' ? 'block' : 'none' }}>
          <UploadField name="image" control={form.control} label="Upload File"></UploadField>
        </Box>
        <Box mt={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" type="submit" size="large">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
