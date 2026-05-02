import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/user/admin",
          { withCredentials: true },
        );

        setAdmin(data.admin);
      } catch (error) {
        console.log("Error fetching admin:", error);
      }
    };

    fetchAdmin();
  }, []);

  return (
    <div className="container mx-auto my-10 flex flex-wrap gap-10 justify-center">
      <h1 className="text-2xl font-semibold mb-4">Popular Creater</h1>
      {admin && admin.length > 0 ? (
        admin.slice(0, 5).map((element) => (
          <div key={element._id} className="text-center">
            {/* Big Circle Profile */}
            <img
              src={element.photo?.url}
              alt="creator photo"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg hover:scale-105 transition duration-300"
            />

            {/* Name */}
            <p className="mt-3 text-base font-semibold text-gray-800">
              {element.name}
            </p>

            {/* Role */}
            <p className="text-sm text-gray-500">{element.role}</p>
          </div>
        ))
      ) : (
        <p>No creators found</p>
      )}
    </div>
  );
}

export default Creator;
