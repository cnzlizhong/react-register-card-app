import { useForm } from "react-hook-form";
import { RegisterCardData } from "../../models/RegisterCardData";
import CardNumberInput from "./CardNumberInput";

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
      </form>
      <div>{JSON.stringify(values, undefined, 2)}</div>
    </div>
  );
};

export default RegisterCardForm;
