import { useAppContext } from "../../store/AppContext";

const Greeting = () => {
  const { userName } = useAppContext();
  return <div className="p-4 text-lg text-center">Hello {userName}!</div>;
};

export default Greeting;
