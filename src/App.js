import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./app.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleRestaurant from "./components/SingleRestaurant/SingleRestaurant";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import Error from "./components/Error/Error";

const Help = lazy(() => import("./pages/Help/Help"));
const App = () => {
  const [user, setUser] = useState({
    name: "Manish",
    email: "manish@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant/:id",
        element: <SingleRestaurant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/help",
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
