import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, ListChecks } from "lucide-react";

const Home = ({ isDarkMode }) => {
  return (
    <div
      className={`container mx-auto px-4 py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1
          className={`text-4xl font-bold mb-8 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          School Management System
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/add-school"
            className={`
              block p-6 rounded-lg shadow-lg transform transition-all 
              hover:scale-105 hover:shadow-xl 
              ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-white text-gray-800 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex flex-col items-center">
              <PlusCircle size={48} className="mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold">Add New School</h2>
              <p
                className={`mt-2 text-center ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Register a new school in the system
              </p>
            </div>
          </Link>

          <Link
            to="/list-schools"
            className={`
              block p-6 rounded-lg shadow-lg transform transition-all 
              hover:scale-105 hover:shadow-xl 
              ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-white text-gray-800 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex flex-col items-center">
              <ListChecks size={48} className="mb-4 text-green-500" />
              <h2 className="text-2xl font-semibold">List Schools</h2>
              <p
                className={`mt-2 text-center ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                View and search all registered schools
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
