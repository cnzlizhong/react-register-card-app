import { FieldValues, UseControllerProps } from "react-hook-form";
import NumberFormattedInput from "../../shared/NumberFormattedInput";

// Default validation rules for cvc.
const CvcRules = {
  required: "CVC cannot be empty",
  validate: (value: string) =>
    value.length === 3 ? true : "Invalid CVC",
};

const CvcFormat = "###";

/** Custom input component with mask and validation rules for CVC. */
const CvcInput = <TFormFields extends FieldValues>(
  props: UseControllerProps<TFormFields>
): JSX.Element => (
  <NumberFormattedInput
    {...props}
    label="CVC"
    format={CvcFormat}
    rules={Object.assign(CvcRules, props.rules)}
  />
);

export default CvcInput;
