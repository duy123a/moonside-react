import { IMAGE_SOURCE, RADIO_OPTIONS } from '@/utils';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

export interface RadioFieldProps {
  control: Control<any>;
  name: string;
  disable?: boolean;
  onCustomChange?: (...event: any[]) => void;
}

export default function RadioField(props: RadioFieldProps) {
  const { control, name, disable = false, onCustomChange = new Function() } = props;
  const generateRadioOptions = () => {
    return RADIO_OPTIONS.map((singleOption) => (
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
            onCustomChange(e.target.value);
          }}
          defaultValue={IMAGE_SOURCE.PICSUM}
        >
          {generateRadioOptions()}
        </RadioGroup>
      )}
    />
  );
}
