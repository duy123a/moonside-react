import * as React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

export interface TextareaFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  disable?: boolean;
  onCustomChange?: (...event: any[]) => void;
}

export default function TextareaField(props: TextareaFieldProps) {
  const { control, name, label, disable = false, onCustomChange = new Function() } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={!!error}
          helperText={error?.message}
          onChange={(e) => {
            onChange(e);
            onCustomChange();
          }}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
          multiline
          minRows={3}
        ></TextField>
      )}
    />
  );
}
