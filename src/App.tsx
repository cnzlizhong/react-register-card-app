import { useEffect } from "react";
import Menu from "./components/Menu";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import { useAppContext } from "./store/AppContext";

function App() {
  const { setUserName } = useAppContext();

  useEffect(() => {
    setUserName("Eric");
    // Only want the setUserName on app loaded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full relative">
      <Menu />
      <RegisterCard />
    </div>
  );
}

export default App;
