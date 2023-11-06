import { useState } from "react";
import search from "../../assets/images/icon-search.svg";
import { useSearchTerm } from "../../context/SearchContext";
import toast from "react-hot-toast";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchTerm } = useSearchTerm();

  const HandleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchValue || typeof searchValue !== "string") {
    toast.error("Field cannot be empty");
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <div className="w-full text-center my-10 relative">
      <form onSubmit={HandleSearch}>
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.trim())}
          placeholder="Search for any word..."
          className="w-[95%] sm:w-[70%] pl-5  dark:bg-gray-100 dark:text-black p-2 placeholder:italic placeholder:text-black text-lg  outline-none border-none rounded-lg bg-[#5e5f5f61]"
        />
      </form>
      <img
        src={search}
        alt="lens"
        className="absolute right-[8%] md:right-[18%] top-[28%]"
      />
    </div>
  );
};
