import * as React from 'react';
import { Control, Controller } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface RadioFieldProps {
  control: Control<any>;
  name: string;
  disable?: boolean;
  customOnChange?: (...event: any[]) => void;
}

const options = [
  {
    label: 'Random image using picsums.photos',
    value: 1,
  },
  {
    label: 'Upload picture from your computer',
    value: 2,
  },
];

export default function RadioField(props: RadioFieldProps) {
  const { control, name, disable = false, customOnChange = new Function() } = props;
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        key={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      ></FormControlLabel>
    ));
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
        <RadioGroup
          value={value}
          onChange={(e) => {
            onChange(e);
            customOnChange(e.target.value);
          }}
          defaultValue={1}
        >
          {generateRadioOptions()}
        </RadioGroup>
      )}
    />
  );
}
