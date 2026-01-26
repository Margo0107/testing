import { useContext } from "react";
import { ThemeContext } from "../../theme/themeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
      }}
    >
      <h2 style={{ color: theme.title }}>Welcome to my React App 👋</h2>
      <p style={{ color: theme.color }}>
        This is a small project where I practice working with forms, modals and
        state management.
      </p>
      <img
        src="https://i.pinimg.com/736x/65/51/7f/65517fdeb1fb70b5991aa5fbfa6765a2.jpg"
        alt="img-dog"
        width={350}
        style={{ margin: "10px" }}
      />
    </div>
  );
};
export default Main;
