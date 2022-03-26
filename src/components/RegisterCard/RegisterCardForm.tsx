import { useForm } from "react-hook-form";
import { RegisterCardData } from "../../models/RegisterCardData";
import CardNumberInput from "./CardNumberInput";
import CvcInput from "./CvcInput";
import ExpiryDateInput from "./ExpiryDateInput";

const RegisterCardForm = ({
  onSubmit,
}: {
  onSubmit: (data: RegisterCardData) => void;
}) => {
  const {
    control,
    watch,
    handleSubmit,
  } = useForm<RegisterCardData>({mode: 'onTouched'});
  const values = watch();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
	  	  <CardNumberInput<RegisterCardData> control={control} name="cardNumber" />
        <CvcInput<RegisterCardData> control={control} name="cvc" />
        <ExpiryDateInput<RegisterCardData> control={control} name="expiry" />
      </form>
      <div>{JSON.stringify(values, undefined, 2)}</div>
    </div>
  );
};

export default RegisterCardForm;
