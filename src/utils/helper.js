export const filterRestaurant = (allRestaurant, inputValue) => {
  const filterData = allRestaurant?.filter((item) =>
    item?.data?.name?.toLowerCase()?.includes(inputValue.toLowerCase())
  );

  return filterData;
};
