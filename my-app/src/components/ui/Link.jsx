import { useContext, useEffect } from "react";
import { ThemeContext } from "../theme/themeContext";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.documentElement.style.setProperty("--color", theme.color);
  }, [theme]);

  const { children, href } = props;

  return (
    <NavLink
      to={href}
      className={({ isActive }) => {
        if (isActive) {
          return "active";
        }
      }}
    >
      {children}
    </NavLink>
  );
};
export default Link;
