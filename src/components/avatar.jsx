import React from "react";

function Avatar({ src, alt, size, border }) {
  return (
    <div className="flex-grow flex justify-center items-center">
      <div className={`avatar ${size} ${border}`}>
        <img src={src} alt={alt} className="rounded-full" />
      </div>
    </div>
  );
}

export default Avatar;
