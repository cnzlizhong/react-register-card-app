import TextField from "@mui/material/TextField";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import NumberFormat, { NumberFormatValues } from "react-number-format";

// Default validation rules for credit card number.
const cardNumberRules = {
  required: "Credit card number cannot be empty",
  validate: (value: number) =>
    value.toString().length === 16 ? true : "Invalid card number",
};

/** Custom input component with mask and validation rules for credit card number. */
const CardNumberInput = <TFormFields extends FieldValues>(
  props: UseControllerProps<TFormFields>
): JSX.Element => {
  const {
    field: { onChange, onBlur, name: inputName, ref, value },
    fieldState: { error },
  } = useController({
    ...props,
    rules: Object.assign(cardNumberRules, props.rules),
  });

  const handleValueChange = (values: NumberFormatValues) => {
    onChange(values.floatValue);
  };

  return (
    <NumberFormat
      name={inputName}
      id={inputName}
      label="Credit Card Number"
      onBlur={onBlur}
      ref={ref}
      value={value}
      onValueChange={handleValueChange}
      displayType="input"
      type="text"
      format="#### #### #### ####"
      error={!!error}
      helperText={error?.message}
      customInput={TextField}
    />
  );
};

export default CardNumberInput;
