import { createContext, useState, useMemo, useContext } from "react";

type FontContextContextProps = {
  fontFamily: string;
  setFontFamily: React.Dispatch<React.SetStateAction<string>>;
};

const FontContext = createContext<FontContextContextProps | null>(null);

const FontContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontFamily, setFontFamily] = useState("");

  const contextValue = useMemo(() => {
    return { fontFamily, setFontFamily };
  }, [fontFamily]);

  return (
    <FontContext.Provider value={contextValue}>{children}</FontContext.Provider>
  );
};

const useFontFamily = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("useFontFamily must be used within a FontContextProvider");
  }

  return context;
};

export { FontContextProvider, useFontFamily };
