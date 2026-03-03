import React, { useState } from "react";

function Card() {
  const [play, setPlay] = useState(false);

  return (
    <div className="border w-[350px] glass rounded-xl flex">
      <img
        src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif"
        alt="music"
        width="150"
        height="150"
        className="rounded-2xl p-2"
      />

      <div className="px-4 py-4">
        <h1>Toxic</h1>
        <p className="text-xs">BoyWithUke</p>

        <button
          className="mt-2 px-3 py-1 bg-black text-white rounded"
          onClick={() => setPlay(!play)}
        >
          {play ? "Playing" : "Paused"}
        </button>
      </div>
    </div>
  );
}

export default Card;