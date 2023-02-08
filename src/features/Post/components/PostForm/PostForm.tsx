import InputField from '@/components/FormControl/InputField';
import RadioField from '@/components/FormControl/RadioField';
import RandomImageField from '@/components/FormControl/RandomImageField';
import TextareaField from '@/components/FormControl/TextareaField';
import UploadField from '@/components/FormControl/UploadField';
import { Post } from '@/types/postsType';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export interface PostFormProps {
  post?: Post;
  onSubmit?: (...event: any[]) => void;
  onBannerChange?: (...event: any[]) => void;
}

export default function PostForm({ post, onSubmit, onBannerChange }: PostFormProps) {
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

  const handleRandomImageChange = (imageUrl: string) => {
    form.setValue('imageUrl', imageUrl);
    if (onBannerChange) {
      onBannerChange(imageUrl);
    }
  };

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="title" label="Title" control={form.control}></InputField>
        <InputField name="author" label="Author" control={form.control}></InputField>
        <TextareaField
          name="description"
          label="Description"
          control={form.control}
        ></TextareaField>
        <Box mt={1}>
          <FormControl>
            <FormLabel>Banner Image</FormLabel>
            <RadioField
              name="imageSource"
              control={form.control}
              onCustomChange={handleRadioChange}
            ></RadioField>
          </FormControl>
        </Box>
        <Box mt={1} sx={{ display: bannerValue === '1' ? 'block' : 'none' }}>
          <RandomImageField
            name="imageUrl"
            control={form.control}
            label="Image"
            onCustomChange={handleRandomImageChange}
          ></RandomImageField>
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
