import React from "react";
import AlignBar from "./AlignBar";
import ContentMain from "./ContentMain";
import SearchBar from "./SearchBar";

const Content = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <SearchBar />
      <AlignBar />
      <ContentMain />
    </div>
  );
};

export default Content;
