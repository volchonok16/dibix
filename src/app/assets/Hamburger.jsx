import React from "react";

export const HamburgerLogo = (props) => {
  return (
    <svg
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect
        x="0.25"
        y="0.25"
        width="23.5"
        height="0.5"
        fill="#C4C4C4"
        stroke="url(#paint0_linear)"
        strokeWidth="0.5"
      />
      <rect
        x="5.25"
        y="9.25"
        width="18.5"
        height="0.5"
        fill="#C4C4C4"
        stroke="url(#paint1_linear)"
        strokeWidth="0.5"
      />
      <rect
        x="0.25"
        y="18.25"
        width="23.5"
        height="0.5"
        fill="#C4C4C4"
        stroke="url(#paint2_linear)"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="0.5"
          x2="24"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="5"
          y1="9.5"
          x2="24"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="0"
          y1="18.5"
          x2="24"
          y2="18.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
