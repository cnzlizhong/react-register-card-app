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
  const { control, handleSubmit, formState } =
    useForm<RegisterCardData>({
      mode: "all",
      defaultValues: {
        cardNumber: "",
        cvc: "",
        expiry: "",
      },
    });
  return (
    <div className="p-6 w-full sm:w-2/3 max-w-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <CardNumberInput<RegisterCardData>
            control={control}
            name="cardNumber"
          />
        </div>
        <div className="flex justify-end mb-10">
          <div className="inline-block w-1/3 max-w-[100px] mr-4">
            <CvcInput<RegisterCardData> control={control} name="cvc" />
          </div>
          <div className="inline-block w-1/3 max-w-[100px]">
            <ExpiryDateInput<RegisterCardData>
              control={control}
              name="expiry"
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-4 bg-yellow-400 block w-full disabled:bg-yellow-200 disabled:text-gray-500"
          disabled={!formState.isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterCardForm;
