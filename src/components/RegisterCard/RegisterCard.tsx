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
      <RegisterCardForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterCard;
