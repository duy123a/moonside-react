import * as React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Control, Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface UploadFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  disable?: boolean;
  customOnChange?: (...event: any[]) => void;
}

export default function UploadField(props: UploadFieldProps) {
  const { control, name, label, disable = false, customOnChange = new Function() } = props;
  const [fileName, setFileName] = React.useState('');
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    console.log(file);
    const { name } = file;
    setFileName(name);
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
          <Button variant="contained" component="label">
            {label}
            <input
              name={name}
              value={value}
              type="file"
              accept="image/*"
              onChange={(e) => {
                onChange(e);
                handleFileUpload(e);
              }}
              hidden
            ></input>
          </Button>
          <Box mt={1}>
            <Typography sx={{ display: 'inline' }}>{fileName}</Typography>
            <FormHelperText>{error?.message}</FormHelperText>
          </Box>
        </FormControl>
      )}
    />
  );
}
