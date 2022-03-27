import { useForm } from "react-hook-form";
import { RegisterCardData } from "../../models/RegisterCardData";
import CardNumberInput from "./Input/CardNumberInput";
import CvcInput from "./Input/CvcInput";
import ExpiryDateInput from "./Input/ExpiryDateInput";

const RegisterCardForm = ({
  onSubmit,
}: {
  onSubmit: (data: RegisterCardData) => void;
}) => {
  const { control, watch, handleSubmit } = useForm<RegisterCardData>({
    mode: "onTouched",
  });
  const values = watch();
  return (
    <div className="p-6 w-full sm:w-2/3 max-w-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <CardNumberInput<RegisterCardData>
            control={control}
            name="cardNumber"
          />
        </div>
        <div className="flex justify-end mb-10">
          <div className="inline-block w-1/3 max-w-[100px] mr-4"><CvcInput<RegisterCardData> control={control} name="cvc" /></div>
          <div className="inline-block w-1/3 max-w-[100px]"><ExpiryDateInput<RegisterCardData> control={control} name="expiry" /></div>
        </div>
        <input type="submit" className="p-4 bg-yellow-400 block w-full cursor-pointer" />
      </form>
      <div>{JSON.stringify(values, undefined, 2)}</div>
    </div>
  );
};

export default RegisterCardForm;
