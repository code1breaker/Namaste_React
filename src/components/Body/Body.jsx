import React, { useState } from "react";

import "./Body.css";
import Search from "../Search/Search";
import Carousel from "../Carousel/Carousel";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { FETCH_URL } from "../../utils/constant";

import useRestaurant from "../../utils/useRestaurant";

const Body = () => {
  const restaurant = useRestaurant(FETCH_URL);
  const [getRestaurant, setGetRestaurant] = useState(restaurant);
  // console.log(getRestaurant);

  return (
    <>
      <section className="carousel">
        <Carousel restaurant={restaurant} />
      </section>

      <Search setGetRestaurant={setGetRestaurant} />

      <section className="container flex restaurant">
        <RestaurantCard getRestaurant={getRestaurant} />
      </section>
    </>
  );
};

export default Body;

// useRestaurant ✅
// search functionality
// useOnline
// lazyloading-instamart
