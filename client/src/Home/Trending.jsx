import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import CarouselLib from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = CarouselLib.default; // 🔥 FIX

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // 🔥 DEBUG (optional — remove later)
  console.log("Blogs:", blogs);
console.log("Carousel:", Carousel);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Trending</h1>

      {Array.isArray(blogs) && blogs.length > 0 ? (
        <Carousel responsive={responsive}>
          {blogs.slice(0, 6).map((element) => (
            <div
              key={element._id}
              className="p-4 bg-white border border-gray-400 rounded-lg shadow-md mx-2"
            >
              <Link to={`/blog/${element._id}`}>
                <div className="relative">
                  <img
                    src={element.blogImage?.url || "/default.jpg"} // ✅ safe
                    alt="blog"
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {element.category}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-b-lg h-36 flex flex-col justify-between">
                  <h1
                    className="text-lg font-bold mb-2 overflow-hidden text-ellipsis"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {element.title}
                  </h1>

                  <div className="flex items-center">
                    <img
                      src={element.adminPhoto || "/default.png"} // ✅ safe
                      alt="author"
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="ml-3 text-gray-400 text-sm">
                      {element.adminName}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex h-40 items-center justify-center">
          Loading...
        </div>
      )}
    </div>
  );
}

export default Trending;