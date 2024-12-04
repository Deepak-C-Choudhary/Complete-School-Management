
import React, { useState } from "react";
import { addSchool } from "../services/schoolService";
import { Save, Map, School } from "lucide-react";

const AddSchool = ({ isDarkMode }) => {
  const [schoolData, setSchoolData] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!schoolData.name.trim()) errors.name = "School name is required";
    if (!schoolData.address.trim()) errors.address = "Address is required";
    if (!schoolData.latitude) errors.latitude = "Latitude is required";
    if (!schoolData.longitude) errors.longitude = "Longitude is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await addSchool({
          ...schoolData,
          latitude: parseFloat(schoolData.latitude),
          longitude: parseFloat(schoolData.longitude),
        });
        alert("School added successfully!");
        // Reset form
        setSchoolData({
          name: "",
          address: "",
          latitude: "",
          longitude: "",
        });
      } catch (error) {
        alert("Error adding school: " + error.message);
      }
    }
  };

  const inputClassName = (fieldName) => `
    w-full px-3 py-2 rounded-lg border 
    ${
      isDarkMode
        ? "bg-gray-700 text-white border-gray-600"
        : "bg-white border-gray-300"
    }
    ${
      formErrors[fieldName]
        ? "border-red-500 focus:ring-red-500"
        : "focus:border-blue-500"
    }
    transition duration-300
  `;

  return (
    <div
      className={`
      min-h-screen w-full flex items-center justify-center
      ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}
    `}
    >
      <div
        className={`
        w-full max-w-md p-8 rounded-lg shadow-xl
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"}
      `}
      >
        <h2
          className={`
          text-3xl font-bold mb-8 flex items-center justify-center
          ${isDarkMode ? "text-white" : "text-gray-800"}
        `}
        >
          <School className="mr-3 text-blue-500" />
          Add New School
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className={`
              block mb-2 
              ${isDarkMode ? "text-gray-300" : "text-gray-700"}
            `}
            >
              School Name
            </label>
            <input
              type="text"
              name="name"
              value={schoolData.name}
              onChange={handleChange}
              className={inputClassName("name")}
              placeholder="Enter school name"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className={`
              block mb-2 
              ${isDarkMode ? "text-gray-300" : "text-gray-700"}
            `}
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={schoolData.address}
              onChange={handleChange}
              className={inputClassName("address")}
              placeholder="Enter school address"
            />
            {formErrors.address && (
              <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                className={`
                block mb-2 
                ${isDarkMode ? "text-gray-300" : "text-gray-700"}
              `}
              >
                Latitude
              </label>
              <input
                type="number"
                name="latitude"
                step="any"
                value={schoolData.latitude}
                onChange={handleChange}
                className={inputClassName("latitude")}
                placeholder="Latitude"
              />
              {formErrors.latitude && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.latitude}
                </p>
              )}
            </div>
            <div>
              <label
                className={`
                block mb-2 
                ${isDarkMode ? "text-gray-300" : "text-gray-700"}
              `}
              >
                Longitude
              </label>
              <input
                type="number"
                name="longitude"
                step="any"
                value={schoolData.longitude}
                onChange={handleChange}
                className={inputClassName("longitude")}
                placeholder="Longitude"
              />
              {formErrors.longitude && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.longitude}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`
              w-full mt-8 py-3 rounded-lg flex items-center justify-center
              transition duration-300 transform hover:scale-105
              ${
                isDarkMode
                  ? "bg-blue-700 text-white hover:bg-blue-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }
            `}
          >
            <Save className="mr-2" />
            Add School
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSchool;