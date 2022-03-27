import { RegisterCardData } from "../../models/RegisterCardData";
import Header from "../Header";
import Greeting from "./Greeting";
import RegisterCardForm from "./RegisterCardForm";

const RegisterCard = () => {
  const handleSubmit = (data: RegisterCardData) => {
    console.log("submitted!", data);
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header headerText="Register Card Form" />
      <Greeting />
      <div className="w-full flex-grow pb-12 flex flex-col items-center justify-end sm:justify-center">
        <RegisterCardForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default RegisterCard;
