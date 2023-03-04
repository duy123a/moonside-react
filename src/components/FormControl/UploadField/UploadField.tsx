import { Box, Button, FormControl, FormHelperText, Typography } from '@mui/material';
import * as React from 'react';
import { Control, Controller } from 'react-hook-form';

export interface UploadFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  disable?: boolean;
  onCustomChange?: (...event: any[]) => void;
}

export default function UploadField(props: UploadFieldProps) {
  const { control, name, label, disable = false, onCustomChange = new Function() } = props;
  const [fileName, setFileName] = React.useState('');
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
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
          <Box>
            <Button variant="contained" component="label">
              {label}
              <input
                name={name}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleFileUpload(e);
                  if (e.target.files) {
                    onChange(e.target.files[0]);
                  }
                }}
                hidden
              ></input>
            </Button>
          </Box>
          <Box mt={1}>
            <Typography sx={{ display: 'inline' }}>{fileName}</Typography>
            <FormHelperText>{error?.message}</FormHelperText>
          </Box>
        </FormControl>
      )}
    />
  );
}
