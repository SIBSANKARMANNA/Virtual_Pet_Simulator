import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

