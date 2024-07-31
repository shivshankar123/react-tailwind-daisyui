import React from "react";

function Avatar({ src, alt, size, border }) {
  return (
    <div className={`avatar ${size} ${border}`}>
      <img src={src} alt={alt} className="rounded-full" />
    </div>
  );
}

export default Avatar;
