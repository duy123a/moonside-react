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
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { IMAGE_SOURCE } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';

export interface PostFormProps {
  post?: Post;
  onSubmit?: (...event: any[]) => void;
  onBannerChange?: (...event: any[]) => void;
}

export default function PostForm({ post, onSubmit, onBannerChange }: PostFormProps) {
  const [imageSourceValue, setImageSourceValue] = React.useState(IMAGE_SOURCE.PICSUM);

  const schema = yup
    .object({
      title: yup.string().required('Please enter title'),
      author: yup
        .string()
        .required('Please enter author')
        .test(
          'at least two word',
          'Please enter at least two words with three characters',
          (value: string | undefined) => {
            if (!value) return false;
            return value.split(' ').filter((x: string) => !!x && x.length >= 3).length >= 2;
          }
        ),
      description: yup.string(),
      imageSource: yup
        .string()
        .required('Please enter image source')
        .oneOf([IMAGE_SOURCE.PICSUM, IMAGE_SOURCE.UPLOAD], 'Invalid image source'),
      imageUrl: yup.string().when('imageSource', {
        is: IMAGE_SOURCE.PICSUM,
        then: yup
          .string()
          .required('Please random a background image')
          .url('Please enter a valid url'),
      }),
      image: yup.mixed().when('imageSource', {
        is: IMAGE_SOURCE.UPLOAD,
        then: yup
          .mixed()
          .test('required', 'Please select an image to upload', (file: File) => Boolean(file?.name))
          .test('max-3mb', 'The image is too large (max 3mb)', (file: File) => {
            const fileSize = file?.size || 0;
            const maxSize = 3 * 1024 * 1024;
            return fileSize <= maxSize;
          }),
      }),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: post?.title || '',
      author: post?.author || '',
      image: '',
      imageUrl: post?.imageUrl || '',
      description: post?.description || '',
      imageSource: IMAGE_SOURCE.PICSUM,
    },
    resolver: yupResolver(schema),
  });

  const handleRadioChange = (value: IMAGE_SOURCE) => {
    setImageSourceValue(value);
  };

  const handleRandomImageChange = (imageUrl: string) => {
    form.setValue('imageUrl', imageUrl);
    if (onBannerChange) {
      onBannerChange(imageUrl);
    }
  };

  const handleSubmit = async (values: Record<string, any>) => {
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
        <Box mt={1} sx={{ display: imageSourceValue === IMAGE_SOURCE.PICSUM ? 'block' : 'none' }}>
          <RandomImageField
            name="imageUrl"
            control={form.control}
            label="Image"
            onCustomChange={handleRandomImageChange}
          ></RandomImageField>
        </Box>
        <Box mt={1} sx={{ display: imageSourceValue === IMAGE_SOURCE.UPLOAD ? 'block' : 'none' }}>
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
