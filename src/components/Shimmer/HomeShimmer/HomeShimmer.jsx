import React from "react";
import "../Shimmer.css";
import "./HomeShimmer.css";

const HomeShimmer = () => {
  return (
    <>
      <section className="carousel" data-testid="shimmer">
        <div className="flex justify-between container animate-pulse">
          {Array(4)
            .fill("")
            .map((e, index) => (
              <div key={index} className="shimmerCarouselCard shimmer"></div>
            ))}
        </div>
      </section>

      <section className="container flex restaurant animate-pulse">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmerCard">
              <div className="shimmerImg shimmer"></div>
              <div className="shimmer-title shimmer shimmer-width-50"></div>
              <div className="shimmer-text shimmer shimmer-width-100"></div>
              <div className="shimmer-title shimmer shimmer-width-100"></div>
            </div>
          ))}
      </section>
    </>
  );
};

export default HomeShimmer;
