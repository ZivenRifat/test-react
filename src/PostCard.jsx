import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`flex flex-col justify-between p-6 bg-white rounded-lg shadow-md 
        transition-all duration-300 transform 
        hover:scale-105 hover:bg-pink-50 hover:border hover:border-gray-03 overflow-hidden`}
    >
      <h2 className="text-lg font-semibold text-center mb-2 text-gray-800">
        {title}
      </h2>

      <p className="text-sm text-gray-01 text-center mb-4 line-clamp-3">{body}</p>

      <button
        onClick={() => setClicked(!clicked)}
        className={`py-2 px-4 rounded-sm font-medium transition-all duration-300
          ${
            clicked
              ? "bg-special-red2 text-white hover:bg-special-red"
              : "bg-gray-01 text-white hover:bg-gray-02"
          }`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
