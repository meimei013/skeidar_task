import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full bg-gray-100 xl:bg-white border-b border-b-gray-300">
      <input
        type="search"
        id="default-search"
        className="block w-full p-2 pe-10 text-sm bg-gray-100 xl:bg-white text-gray-900"
        placeholder="Search..."
      />
      <svg
        className="w-4 h-4 text-gray-500 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
