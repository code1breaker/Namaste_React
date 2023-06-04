import { createContext } from "react";

const UserContext = createContext({
  name: "dummyName",
  email: "dummy@gmail.com",
});

export default UserContext;
