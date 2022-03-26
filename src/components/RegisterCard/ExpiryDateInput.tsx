import { FieldValues, UseControllerProps } from "react-hook-form";
import NumberFormattedInput from "../shared/NumberFormattedInput";

// Default validation rules for cvc.
const ExpiryDateRules = {
  required: "Expiry date cannot be empty",
//   validate: (value: string) =>
//     value.toString().length === 3 ? true : "Invalid Expiry date",
};

const ExpiryDateFormat = "##/##";

/** Custom input component with mask and validation rules for CVC. */
const ExpiryDateInput = <TFormFields extends FieldValues>(
  props: UseControllerProps<TFormFields>
): JSX.Element => (
  <NumberFormattedInput
    {...props}
    label="Expiry"
    format={ExpiryDateFormat}
    rules={Object.assign(ExpiryDateRules, props.rules)}
  />
);

export default ExpiryDateInput;
