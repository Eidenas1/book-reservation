import { useState } from "react";

const Search = () => {

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="h-max w-full flex">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        id="search"
        className="w-full h-[3.25rem] bg-[#d6d2bc] rounded-3xl px-8 shadow-[inset_0_0_0.35rem_rgba(0,0,0,0.9)] font-sans placeholder-root"
      />
    </form>
  );
};

export default Search;
