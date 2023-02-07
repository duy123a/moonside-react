import * as React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

export interface InputFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  disable?: boolean;
  customOnChange?: (...event: any[]) => void;
}

export default function InputField(props: InputFieldProps) {
  const { control, name, label, disable = false, customOnChange = new Function() } = props;
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
            customOnChange();
          }}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
        ></TextField>
      )}
    />
  );
}
