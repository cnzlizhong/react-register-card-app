import TextField from "@mui/material/TextField";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import NumberFormat, {
  FormatInputValueFunction,
  NumberFormatValues,
} from "react-number-format";

interface CustomInputProps {
  label: string;
  format: string | FormatInputValueFunction;
}

/** Custom formatted input component for number. */
const NumberFormattedInput = <TFormFields extends FieldValues>({
  label,
  format,
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
}: UseControllerProps<TFormFields> & CustomInputProps): JSX.Element => {
  const {
    field: { onChange, onBlur, name: inputName, ref, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue, shouldUnregister });

  const handleValueChange = (values: NumberFormatValues) => {
    onChange(values.floatValue);
  };

  return (
    <NumberFormat
      name={inputName}
      id={inputName}
      label={label}
      onBlur={onBlur}
      ref={ref}
      value={value}
      onValueChange={handleValueChange}
      displayType="input"
      type="text"
      format={format}
      error={!!error}
      helperText={error?.message}
      customInput={TextField}
    />
  );
};

export default NumberFormattedInput;
