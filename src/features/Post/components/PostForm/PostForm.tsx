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
      bannerUrl: '',
      description: '',
      banner: '1',
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
          <InputField name="bannerUrl" label="BannerUrl" control={form.control}></InputField>
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
              name="banner"
              control={form.control}
              customOnChange={handleRadioChange}
            ></RadioField>
          </FormControl>
        </Box>
        <Box mt={1}>
          <Button variant="contained" color="primary" type="submit" size="large">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
