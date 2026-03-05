import { useContext } from "react";
import ToggleThemeButton from "./components/toggleThemeButton";
import { ThemeContext } from "./context/themeProvider";

export default function App() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("App must be used inside <ThemeProvider>.");
  }

  const { theme } = ctx;

  return (
    <div className={`page ${theme}`}>
      <main className="card">
        <h1 className="title">Dark mode / Light mode</h1>

        <p className="subtitle">
          Why do programmers prefer darkmode? Because light attracts bugs 🪲
        </p>

        <p className="status">
          {theme === "light" ? "Du bruker nå light mode!" : "Du bruker nå dark mode!"}
        </p>

        <ToggleThemeButton />
      </main>
    </div>
  );
}