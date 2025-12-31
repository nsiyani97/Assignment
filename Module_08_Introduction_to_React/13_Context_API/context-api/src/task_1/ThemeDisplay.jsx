import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "10px", background: theme === "light" ? "#eee" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      Current Theme: {theme}
    </div>
  );
};

export default ThemeDisplay;
