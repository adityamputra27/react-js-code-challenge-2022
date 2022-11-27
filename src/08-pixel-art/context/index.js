import { createContext } from "react";

export const ColorContext = createContext({
  color: "lightGrey",
  setColor: () => {},
});
