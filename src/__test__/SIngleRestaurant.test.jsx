import SingleRestaurant from "../components/SingleRestaurant/SingleRestaurant";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../redux/store";
import { RESTAURANT_MENU } from "../mocks/data";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header/Header";
import UserContext from "../utils/UserContext";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});

const user = {
  user: {
    name: "ass",
    email: "dfsdf",
  },
};

test("Menu should load on rendering", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <SingleRestaurant />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    return expect(menu.getByTestId("menu-data"));
  });

  const menuData = menu.getByTestId("menu-data");

  expect(menuData).toBeInTheDocument();
});

test("Add Items on Cart", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <SingleRestaurant />
      </Provider>
    </StaticRouter>
  );

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <UserContext.Provider value={{ user }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    return expect(menu.getByTestId("menu-data"));
  });

  const addBtn = menu.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("1");
});
