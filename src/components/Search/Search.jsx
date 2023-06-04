import React, { useEffect, useState } from "react";
import "./Search.css";

import { FETCH_URL } from "../../utils/constant";
import useRestaurant from "../../utils/useRestaurant";
import { filterRestaurant } from "../../utils/helper";

const Search = ({ setFilterRestaurant }) => {
  const [inputValue, setInputValue] = useState("");
  const restaurant = useRestaurant(FETCH_URL);
  const [allRestaurant, setAllRestaurant] = useState();

  useEffect(() => {
    setAllRestaurant(restaurant?.data?.cards[2]?.data?.data?.cards);
  }, [restaurant]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="srch flex container"
      >
        <input
          type="text"
          placeholder="Search Here..."
          value={inputValue}
          onChange={handleInput}
          data-testid="search-input"
        />
        <button
          type="submit"
          data-testid="search-btn"
          onClick={() => {
            const data = filterRestaurant(allRestaurant, inputValue);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
