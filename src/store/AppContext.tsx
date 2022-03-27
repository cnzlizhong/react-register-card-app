import { createContext, ReactNode, useCallback, useContext, useState } from "react";

type AppContextType = {
  menuShown: boolean;
  toggleMenu: () => void;
  userName: string | undefined;
  setUserName: (userName: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [menuShown, setMenuShown] = useState(false);
  const [userName, setUserName] = useState<string | undefined>();
  const toggleMenu = useCallback(
    () => {
      setMenuShown((value) => !value);
    },
    [],
  );
  
  return <AppContext.Provider value={{menuShown, toggleMenu, userName, setUserName}}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    const appContext = useContext(AppContext);
    if (!appContext) throw new Error('Cannot use AppContext outside of its Provider');
    return appContext;
}