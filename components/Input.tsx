import React, { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="https://play-lh.googleusercontent.com/-ItVws7vnhnE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmXV2m7DQlRgrcbxEDI1nc0wkuv_Q/photo.jpg"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            rows={2}
            className="bg-transparent outline-none text-[#d9d9d9] text-lg"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
