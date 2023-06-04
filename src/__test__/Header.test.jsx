import { Provider } from "react-redux";
import Header from "../components/Header/Header";
import UserContext from "../utils/UserContext";
import store from "../redux/store";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";

const user = {
  user: {
    name: "ass",
    email: "dfsdf",
  },
};

test("cart should be 0 on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <UserContext.Provider value={{ user }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("0");
});

// test("Online Status should be green on rendering header", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <UserContext.Provider value={{ user }}>
//           <Header />
//         </UserContext.Provider>
//       </Provider>
//     </StaticRouter>
//   );
//   console.log(header);
//   const onlineStatus = header.getByTestId("online-status");

//   expect(onlineStatus.innerHTML).toBe("🟢");
// });
