import * as React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { Control, Controller } from 'react-hook-form';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import { randomNumber } from '@/utils';

export interface RandomImageFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  disable?: boolean;
  onCustomChange?: (...event: any[]) => void;
}

export default function RandomImageField(props: RandomImageFieldProps) {
  const { control, name, label, disable = false, onCustomChange = new Function() } = props;
  const handleRandomButtonClick = () => {
    const imageUrl = `https://picsum.photos/id/${randomNumber(1000)}/1368/400`;
    onCustomChange(imageUrl);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <FormControl error={!!error}>
          <Typography>We're using Picsum service to get a random image.</Typography>
          <Box mt={1}>
            <Button variant="contained" color="primary" onClick={handleRandomButtonClick}>
              Change post image
            </Button>
          </Box>
          <OutlinedInput
            name={name}
            value={value}
            onChange={onChange}
            sx={{ display: 'none' }}
          ></OutlinedInput>
          <Box mt={1}>
            <FormHelperText>{error?.message}</FormHelperText>
          </Box>
        </FormControl>
      )}
    />
  );
}
