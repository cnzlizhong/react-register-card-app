import { FieldValues, UseControllerProps } from "react-hook-form";
import NumberFormattedInput from "../../shared/NumberFormattedInput";

// Default validation rules for cvc.
// Expecting value from NumberFormat is a numeric string.
const ExpiryDateRules = {
  required: 'Expiry date cannot be empty',
  validate: (value: string) => {
    const invalidMessage = 'Invalid Expiry date.';
    const expiredMessage = 'Cannot register an expired card.';
    if (value.length !== 4) return invalidMessage;
    const year = Number(value.substring(2));
    const currentDate = new Date();
    const currentYear = Number(currentDate.getUTCFullYear().toString().substring(2));
    const currentMonth = Number(currentDate.getUTCMonth().toString());
    const month = Number(value.substring(0, 2));
    if (month < 1 || month > 12) return invalidMessage;
    return year > currentYear || (year === currentYear && month > currentMonth) || expiredMessage;
  }
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
    placeholder="MM/YY"
    mask={['M', 'M', 'Y', 'Y']}
  />
);

export default ExpiryDateInput;
