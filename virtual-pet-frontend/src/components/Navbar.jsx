import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-2xl font-bold">🐾 Virtual Pet Simulator</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}
