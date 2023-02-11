import React, { useEffect, useState } from "react";
import "./Search.css";

import { FETCH_URL } from "../../utils/constant";
import useRestaurant from "../../utils/useRestaurant";

const Search = ({ setGetRestaurant }) => {
  const restaurant = useRestaurant(FETCH_URL);
  const [inputValue, setInputValue] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAllRestaurant(restaurant?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurant(restaurant?.data?.cards[2]?.data?.data?.cards);
      setGetRestaurant(filterRestaurant);
    }, 1000);
    // console.log("allrestaurant", allRestaurant);
    // console.log("filterRestaurant", filterRestaurant);
    // console.log("restaurant", restaurant);
  }, []);

  const filter = (allRestaurant, inputValue) => {
    const data = allRestaurant?.filter((restaurant) => {
      restaurant?.data?.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    console.log(data);
    return data;
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
        <button
          onClick={() => {
            const data = filter(allRestaurant, inputValue);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;

// restaurant?.data?.cards[2]?.data?.data?.cards
