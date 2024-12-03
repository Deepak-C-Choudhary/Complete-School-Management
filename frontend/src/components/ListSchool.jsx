// import React, { useState, useEffect } from "react";
// import { listSchools } from "../services/schoolService";
// import { Search, MapPin, List } from "lucide-react";

// const ListSchools = ({ isDarkMode }) => {
//   const [schools, setSchools] = useState([]);
//   const [location, setLocation] = useState({
//     latitude: "",
//     longitude: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLocationChange = (e) => {
//     const { name, value } = e.target;
//     setLocation((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const fetchSchools = async () => {
//     setIsLoading(true);
//     try {
//       const data =
//         location.latitude && location.longitude
//           ? await listSchools(location.latitude, location.longitude)
//           : await listSchools();
//       setSchools(data);
//     } catch (error) {
//       alert("Error fetching schools: " + error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSchools();
//   }, []);

//   const tableRowClassName = (index) => `
//     ${isDarkMode ? "hover:bg-gray-700 bg-gray-800" : "hover:bg-gray-100"}
//     transition duration-300
//   `;

//   return (
//     <div
//       className={`
//       max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-md
//       ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"}
//     `}
//     >
//       <h2
//         className={`
//         text-2xl font-bold mb-6 flex items-center
//         ${isDarkMode ? "text-white" : "text-gray-800"}
//       `}
//       >
//         <List className="mr-3 text-green-500" />
//         School List
//       </h2>

//       <div className="mb-6 flex space-x-4">
//         <div className="flex-1">
//           <label
//             className={`
//             block mb-2
//             ${isDarkMode ? "text-gray-300" : "text-gray-700"}
//           `}
//           >
//             Latitude
//           </label>
//           <input
//             type="number"
//             name="latitude"
//             placeholder="Enter Latitude"
//             step="any"
//             value={location.latitude}
//             onChange={handleLocationChange}
//             className={`
//               w-full px-3 py-2 rounded-lg border
//               ${
//                 isDarkMode
//                   ? "bg-gray-700 text-white border-gray-600"
//                   : "bg-white border-gray-300"
//               }
//             `}
//           />
//         </div>
//         <div className="flex-1">
//           <label
//             className={`
//             block mb-2
//             ${isDarkMode ? "text-gray-300" : "text-gray-700"}
//           `}
//           >
//             Longitude
//           </label>
//           <input
//             type="number"
//             name="longitude"
//             placeholder="Enter Longitude"
//             step="any"
//             value={location.longitude}
//             onChange={handleLocationChange}
//             className={`
//               w-full px-3 py-2 rounded-lg border
//               ${
//                 isDarkMode
//                   ? "bg-gray-700 text-white border-gray-600"
//                   : "bg-white border-gray-300"
//               }
//             `}
//           />
//         </div>
//         <div className="flex items-end">
//           <button
//             onClick={fetchSchools}
//             disabled={isLoading}
//             className={`
//               px-4 py-2 rounded-lg flex items-center
//               transition duration-300 transform hover:scale-105
//               ${
//                 isDarkMode
//                   ? "bg-blue-700 text-white hover:bg-blue-600"
//                   : "bg-blue-500 text-white hover:bg-blue-600"
//               }
//               ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
//             `}
//           >
//             <Search className="mr-2" />
//             {isLoading ? "Searching..." : "Search"}
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr
//               className={`
//               ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}
//             `}
//             >
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Address</th>
//               <th className="border p-2">
//                 <div className="flex items-center justify-center">
//                   <MapPin size={16} className="mr-1" /> Latitude
//                 </div>
//               </th>
//               <th className="border p-2">
//                 <div className="flex items-center justify-center">
//                   <MapPin size={16} className="mr-1" /> Longitude
//                 </div>
//               </th>
//               <th className="border p-2">Distance (km)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schools.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="5"
//                   className={`
//                     text-center p-4
//                     ${isDarkMode ? "text-gray-400" : "text-gray-600"}
//                   `}
//                 >
//                   No schools found
//                 </td>
//               </tr>
//             ) : (
//               schools.map((school, index) => (
//                 <tr key={index} className={tableRowClassName(index)}>
//                   <td className="border p-2">{school.name}</td>
//                   <td className="border p-2">{school.address}</td>
//                   <td className="border p-2 text-center">{school.latitude}</td>
//                   <td className="border p-2 text-center">{school.longitude}</td>
//                   <td className="border p-2 text-center">
//                     {school.distance ? school.distance.toFixed(2) : "N/A"}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ListSchools;









import React, { useState, useEffect } from "react";
import { listSchools } from "../services/schoolService";
import { Search, MapPin, List } from "lucide-react";

const ListSchools = ({ isDarkMode }) => {
  const [schools, setSchools] = useState([]);
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchSchools = async () => {
    setIsLoading(true);
    try {
      const data =
        location.latitude && location.longitude
          ? await listSchools(location.latitude, location.longitude)
          : await listSchools();
      setSchools(data);
    } catch (error) {
      alert("Error fetching schools: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  const tableRowClassName = (index) => `
    ${isDarkMode ? "hover:bg-gray-700 bg-gray-800" : "hover:bg-gray-100"}
    transition duration-300
  `;

  return (
    <div
      className={`
      min-h-screen w-full p-8
      ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"}
    `}
    >
      <div
        className={`
        max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"}
      `}
      >
        <div className="p-6">
          <h2
            className={`
            text-3xl font-bold mb-6 flex items-center
            ${isDarkMode ? "text-white" : "text-gray-800"}
          `}
          >
            <List className="mr-3 text-green-500" />
            School List
          </h2>

          <div className="mb-6 flex space-x-4">
            <div className="flex-1">
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
                placeholder="Enter Latitude"
                step="any"
                value={location.latitude}
                onChange={handleLocationChange}
                className={`
                  w-full px-3 py-2 rounded-lg border
                  ${
                    isDarkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white border-gray-300"
                  }
                `}
              />
            </div>
            <div className="flex-1">
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
                placeholder="Enter Longitude"
                step="any"
                value={location.longitude}
                onChange={handleLocationChange}
                className={`
                  w-full px-3 py-2 rounded-lg border
                  ${
                    isDarkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white border-gray-300"
                  }
                `}
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={fetchSchools}
                disabled={isLoading}
                className={`
                  px-4 py-2 rounded-lg flex items-center
                  transition duration-300 transform hover:scale-105
                  ${
                    isDarkMode
                      ? "bg-blue-700 text-white hover:bg-blue-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }
                  ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <Search className="mr-2" />
                {isLoading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={`
                  ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}
                `}
                >
                  <th className="border p-3">Name</th>
                  <th className="border p-3">Address</th>
                  <th className="border p-3">
                    <div className="flex items-center justify-center">
                      <MapPin size={16} className="mr-1" /> Latitude
                    </div>
                  </th>
                  <th className="border p-3">
                    <div className="flex items-center justify-center">
                      <MapPin size={16} className="mr-1" /> Longitude
                    </div>
                  </th>
                  <th className="border p-3">Distance (km)</th>
                </tr>
              </thead>
              <tbody>
                {schools.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className={`
                        text-center p-4 
                        ${isDarkMode ? "text-gray-400" : "text-gray-600"}
                      `}
                    >
                      No schools found
                    </td>
                  </tr>
                ) : (
                  schools.map((school, index) => (
                    <tr key={index} className={tableRowClassName(index)}>
                      <td className="border p-3">{school.name}</td>
                      <td className="border p-3">{school.address}</td>
                      <td className="border p-3 text-center">
                        {school.latitude}
                      </td>
                      <td className="border p-3 text-center">
                        {school.longitude}
                      </td>
                      <td className="border p-3 text-center">
                        {school.distance ? school.distance.toFixed(2) : "N/A"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSchools;