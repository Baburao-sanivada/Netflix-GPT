import React from "react";

const Shimmer = () => {
  return (
    <div>
      {/* div1 */}
      <div className="flex">
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
      </div>
      {/* div2 */}
      <div className="flex">
        <div className="w-150px h-52 bg-gray-100"></div>
        <div className="w-150px h-52 bg-gray-100"></div>
        <div className="w-150px h-52 bg-gray-100"></div>
        <div className="w-150px h-52 bg-gray-100"></div>
        <div className="w-150px h-52 bg-gray-100"></div>
      </div>
      {/* div3 */}
      <div className="flex">
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
        <div className="w-150px h-52 bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Shimmer;
