import { useContext } from "react";
import { ThemeContext } from "../context/themeProvider";

const ToggleThemeButton = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("ToggleThemeButton must be used inside <ThemeProvider>.");
  }

  const { theme, toggleTheme } = ctx;
  const nextLabel = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button className="btn" onClick={toggleTheme} type="button" aria-label={nextLabel}>
      {nextLabel}
    </button>
  );
};

export default ToggleThemeButton;