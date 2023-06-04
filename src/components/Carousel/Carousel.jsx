import React, { useState } from "react";
import { IMG_CAROUSEL_URL } from "../../utils/constant";
import "./Carousel.css";

const Carousel = ({ restaurant }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const handleNextSlide = () => {
    if (endIndex < 7) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };
  const handlePrevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  return (
    <div className="container flex justify-between">
      <button onClick={handlePrevSlide} className="right-btn">
        &lt;
      </button>
      {restaurant?.data?.cards[0]?.data?.data?.cards
        ?.slice(startIndex, endIndex)
        ?.map((item) => {
          return (
            <div className="carouselCard" key={item?.data?.bannerId}>
              <img
                src={`${IMG_CAROUSEL_URL}${item?.data?.creativeId}`}
                alt="carousel"
              />
            </div>
          );
        })}

      <button onClick={handleNextSlide} className="next-btn">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
