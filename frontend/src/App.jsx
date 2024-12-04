
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Moon, Sun, LogIn } from "lucide-react";
import AddSchool from "./components/AddSchool";
import ListSchools from "./components/ListSchool";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`w-full min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <Router>
        <nav
          className={`w-full p-4 ${isDarkMode ? "bg-gray-800" : "bg-blue-600"}`}
        >
          <div className="w-full px-4 flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              School Management
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/add-school"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Add School
              </Link>
              <Link
                to="/list-schools"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                List Schools
              </Link>
              <button
                onClick={toggleTheme}
                className="text-white hover:bg-blue-700 p-2 rounded-full"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button className="text-white hover:bg-blue-700 px-4 py-2 rounded flex items-center">
                <LogIn className="mr-2" size={20} />
                Login
              </button>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path="/add-school"
            element={<AddSchool isDarkMode={isDarkMode} />}
          />
          <Route
            path="/list-schools"
            element={<ListSchools isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
