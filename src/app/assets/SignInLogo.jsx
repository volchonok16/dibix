import React from "react";

export const SignInLogo = (props) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M12.6 8.4L7.3 13.7C7.2 13.8 7.1 13.9 6.9 13.9C6.7 13.9 6.6 13.8 6.5 13.7C6.3 13.5 6.3 13.2 6.5 12.9L11 8.5H0.5C0.2 8.5 0 8.3 0 8C0 7.7 0.2 7.5 0.5 7.5H11L6.6 3C6.4 2.8 6.4 2.5 6.6 2.2C6.8 1.9 7.1 2 7.4 2.2L12.7 7.5C12.9 7.8 12.9 8.2 12.6 8.4ZM17.1 12.8V3.2C17.1 1.4 15.7 0 13.9 0H10.2C9.8 0 9.6 0.2 9.6 0.5C9.6 0.8 9.8 1 10.1 1H13.8C15 1.1 16 2 16 3.2V12.8C16 14 15 14.9 13.9 14.9H10.2C9.9 14.9 9.7 15.1 9.7 15.4C9.7 15.7 9.9 15.9 10.2 15.9H13.9C15.6 16 17.1 14.6 17.1 12.8Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="7.95252"
          x2="17.1"
          y2="7.95252"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97794D" />
          <stop offset="1" stopColor="#E3CB8F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
