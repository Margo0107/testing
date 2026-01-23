import { createContext } from "react";

export const themes = {
  orange: {
    color: "var(--color-light)",
    title: "var(--color-title-light)",
    background: "var(--bg-light)",
  },
  black: {
    color: "var(--color-dark)",
    title: "var( --color-title-dark)",
    background: "var(--bg-dark)",
  },
};
export const ThemeContext = createContext();
