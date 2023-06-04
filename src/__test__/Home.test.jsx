import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";

import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/data";
import store from "../redux/store";

import Home from "../pages/Home/Home";
import Search from "../components/Search/Search";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer should load on rendering home", () => {
  const home = render(
    <StaticRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </StaticRouter>
  );
  const shimmer = home.getByTestId("shimmer");

  // expect(shimmer.children.length).toBe(15); ✅
  expect(shimmer).toBeInTheDocument();
});

test("Restaurants should load on rendering home", async () => {
  const home = render(
    <StaticRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    return expect(home.getAllByTestId("data"));
  });

  const restaurantData = home.getAllByTestId("restaurant-data");

  expect(restaurantData.length).toBe(15);
});
