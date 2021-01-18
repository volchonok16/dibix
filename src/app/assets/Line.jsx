import React from "react";

export const Line = (props) => {
  return (
    <svg
      width="139"
      height="5"
      viewBox="0 0 139 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect width="139" height="5" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="2.5"
          x2="139"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
