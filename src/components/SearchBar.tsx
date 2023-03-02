import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUserTie } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="bg-rvnComponentBG flex px-6 py-5 rounded-lg text-rvnTextSecondary justify-between">
      <div className="flex items-center gap-6">
        <FontAwesomeIcon className="" icon={faSearch} />
        <input className="bg-inherit" placeholder="Search" type="text" />
      </div>
      <div className="flex items-center gap-6">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUserTie} />
      </div>
    </div>
  );
};

export default SearchBar;
