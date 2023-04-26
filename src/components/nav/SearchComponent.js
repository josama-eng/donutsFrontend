import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleIconClick = () => {
    inputRef.current.focus();
    setExpanded(true);
    setShowPlaceholder(true);
  };

  const handleInputBlur = () => {
    if (searchValue === "") {
      setExpanded(false);
      setShowPlaceholder(false);
    } else {
      setExpanded(true);
    }
  };

  const onSearchHandler = () => {
    navigate(`/shop/${searchValue.replaceAll(" ", "-")}`);
  };

  return (
    <>
      <div className={`input-search ${expanded ? "expanded" : ""}`}>
        <input
          type="text"
          placeholder={showPlaceholder ? "Search..." : ""}
          onClick={() => setShowPlaceholder(false)}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <FaSearch className="search-icon" onClick={handleIconClick} />
      </div>
      {expanded && (
        <button className="searchBtn" onClick={() => onSearchHandler()}>
          Search
        </button>
      )}
    </>
  );
};

export default SearchComponent;
