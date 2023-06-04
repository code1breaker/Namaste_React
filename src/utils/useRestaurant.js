import { useState, useEffect } from "react";

const useRestaurant = (url) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      setRestaurant(data);
    };

    fetchData();
  }, []);

  return restaurant;
};

export default useRestaurant;
