import React from "react";
import "./RestaurantShimmer.css";
import "../Shimmer.css";
const RestaurantShimmer = () => {
  return (
    <section className="flex container animate-pulse">
      <div className="menu">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="menuItem">
              <div className="shimmer-title shimmer-width-50 shimmer"></div>
              <div className="shimmer-text shimmer-width-20 shimmer"></div>
              <div className="shimmer-title shimmer-width-50 shimmer"></div>
            </div>
          ))}
      </div>

      <div className="shimmerCart">
        <div className="shimmer-title shimmer-width-50 shimmer"></div>
        <div className="shimmer-text shimmer-width-20 shimmer"></div>
        <div className="shimmer-title shimmer-width-100 shimmer"></div>
        <div className="shimmer-title shimmer-width-100 shimmer"></div>
        <div className="shimmer-title shimmer-width-50 shimmer"></div>
      </div>
    </section>
  );
};
export default RestaurantShimmer;
