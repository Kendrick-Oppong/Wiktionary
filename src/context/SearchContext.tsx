import { createContext, useState, useMemo, useContext } from "react";

type SearchContextProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextProps | null>(null);

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("dictionary");

  const contextValue = useMemo(() => {
    return { searchTerm, setSearchTerm };
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchTerm = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchTerm must be used within a SearchContextProvider"
    );
  }

  return context;
};

export { SearchContext, SearchContextProvider, useSearchTerm };
