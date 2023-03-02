import React from "react";
import AlignBar from "./AlignBar";
import SearchBar from "./SearchBar";

const Content = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <SearchBar />
      <AlignBar />
    </div>
  );
};

export default Content;
