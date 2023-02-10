import React, { useState } from "react";
import "./Search.css";

import { FETCH_URL } from "../../utils/constant";
import useRestaurant from "../../utils/useRestaurant";

const Search = ({ setGetRestaurant }) => {
  const restaurant = useRestaurant(FETCH_URL);
  const [inputValue, setInputValue] = useState("");

  const [allRestaurant] = useState(
    restaurant?.data?.cards[2]?.data?.data?.cards
  );
  const [filterRestaurant, setFilterRestaurant] = useState(
    restaurant?.data?.cards[2]?.data?.data?.cards
  );

  const filter = () => {
    const filterData = allRestaurant?.filter((restaurant) => {
      restaurant?.data?.name?.toLowerCase()?.includes(inputValue.toLowerCase());

      setFilterRestaurant(filterData);
      setGetRestaurant(filterRestaurant);
    });
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="srch flex container">
        <input
          type="text"
          placeholder="Search Here..."
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={filter}>Search</button>
      </div>
    </>
  );
};

export default Search;
