import React, { useEffect, useState } from "react";

import "./Home.css";
import Search from "../../components/Search/Search";
import Carousel from "../../components/Carousel/Carousel";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { FETCH_URL } from "../../utils/constant";
import useRestaurant from "../../utils/useRestaurant";

import HomeShimmer from "../../components/Shimmer/HomeShimmer/HomeShimmer";

import { Link } from "react-router-dom";

const Home = () => {
  const restaurant = useRestaurant(FETCH_URL);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  useEffect(() => {
    setFilterRestaurant(restaurant?.data?.cards[2]?.data?.data?.cards);
  }, [restaurant]);

  if (!filterRestaurant?.length) {
    return <HomeShimmer />;
  }

  return (
    <>
      <section className="carousel">
        <Carousel restaurant={restaurant} />
      </section>

      <Search setFilterRestaurant={setFilterRestaurant} />

      <section className="container flex restaurant" data-testid="data">
        {filterRestaurant?.map((item) => {
          return (
            <div
              className="card"
              data-testid="restaurant-data"
              key={item?.data?.id}
            >
              <Link to={`/restaurant/${item?.data?.id}`}>
                <RestaurantCard item={item} />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
