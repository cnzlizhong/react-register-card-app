import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppContext } from "../../store/AppContext";

const Header = ({ headerText, isMenuHeader = false }: { headerText: string, isMenuHeader?: boolean }) => {
  const { toggleMenu } = useAppContext();
  return (
    <div className="w-full flex items-center justify-center bg-yellow-400 relative">
      <div className="absolute left-0 p-4 h-full flex items-center cursor-pointer hover:bg-yellow-500" onClick={toggleMenu}>
        {isMenuHeader ? (
          <ArrowBackIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
      <h1 className="p-2 text-lg font-medium">{headerText}</h1>
    </div>
  );
};

export default Header;
