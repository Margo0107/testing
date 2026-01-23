import { useContext } from "react";
import { themes, ThemeContext } from "../theme/themeContext";
import CastomButton from "./buttons/CastomButton";
const ChangeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === themes.orange) {
      setTheme(themes.black);
    } else {
      setTheme(themes.orange);
    }
  };
  return <CastomButton onClick={handleClick}>change theme</CastomButton>;
};
export default ChangeButton;
