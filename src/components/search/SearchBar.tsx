import search from "../../assets/images/icon-search.svg";

export const SearchBar = () => {
  return (
    <div className="w-full text-center my-10 relative">
      <input
        type="search"
        name=""
        id=""
        placeholder="Search for any word..."
        className="w-[95%] sm:w-[70%] pl-5  p-2 placeholder:italic placeholder:text-black text-lg  outline-none border-none rounded-lg bg-[#5e5f5f61]"
      />
      <img
        src={search}
        alt="lens"
        className="absolute right-[6%] md:right-[16%] top-[28%]"
      />
    </div>
  );
};
