import React, { useState, useEffect } from "react";
import { CDN_URL, SWIGGY_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = null;
    if (searchQuery !== "") {
      timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestion();
        }
      }, 300);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(SWIGGY_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json.data.suggestions);

    dispatch(
      cacheResults({
        [searchQuery]: json.data.suggestions,
      })
    );
  };

  return (
    <div className="container my-5 d-flex flex-column ">
      <div className="container-fluid">
        <div className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {searchQuery.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <ul className="list-group my-4">
            {suggestions.map((suggestion) => (
              <li key={suggestion.text} className="list-group-item">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    {suggestion.cloudinaryId && (
                      <img
                        className="rounded"
                        style={{ width: "4rem", height: "4rem" }}
                        src={CDN_URL + suggestion.cloudinaryId}
                      />
                    )}
                  </div>
                  <div className="mx-2">
                    <p style={{ height: "1px" }}>{suggestion.text}</p>
                    <small className="text-secondary" style={{ height: "1px" }}>
                      {suggestion.category}
                    </small>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
