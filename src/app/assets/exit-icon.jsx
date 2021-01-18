import React from "react";

export const ExitIcon = (props) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      className={props.className}
    >
      <rect
        x="0.72168"
        y="0.368202"
        width="22.5"
        height="0.5"
        transform="rotate(45 0.72168 0.368202)"
        fill="#C0A570"
        stroke="url(#paint0_linear)"
        strokeWidth="0.5"
      />
      <rect
        x="0.368202"
        y="16.2783"
        width="22.5"
        height="0.5"
        transform="rotate(-45 0.368202 16.2783)"
        fill="#C0A570"
        stroke="url(#paint1_linear)"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.72168"
          y1="0.514648"
          x2="23.7217"
          y2="0.514648"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="0.0146484"
          y1="16.7783"
          x2="23.0146"
          y2="16.7783"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
