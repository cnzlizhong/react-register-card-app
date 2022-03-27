import { FieldValues, UseControllerProps } from "react-hook-form";
import NumberFormattedInput from "../../shared/NumberFormattedInput";

// Default validation rules for credit card number.
const cardNumberRules = {
  required: "Credit card number cannot be empty",
  validate: (value: string) =>
    value.length === 16 ? true : "Invalid card number",
};

const cardNumberFormat = "#### #### #### ####";

/** Custom input component with mask and validation rules for credit card number. */
const CardNumberInput = <TFormFields extends FieldValues>(
  props: UseControllerProps<TFormFields>
): JSX.Element => (
  <NumberFormattedInput
    {...props}
    label="Credit Card Number"
    format={cardNumberFormat}
    rules={Object.assign(cardNumberRules, props.rules)}
  />
);

export default CardNumberInput;
