import React from "react";

const SunRise = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill={"currentColor"}
    viewBox="0 0 24 24"
    {...props}
  >
    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
    <path d="m12,7c-2.97,0-5.43,2.17-5.91,5H2v2h20v-2h-4.09c-.48-2.83-2.94-5-5.91-5Z"></path>
    <path d="M11 2H13V5H11z"></path>
    <path d="M17.71 7.71 18.71 6.71 19.71 5.71 19 5 18.29 4.29 17.29 5.29 16.29 6.29 17 7 17.71 7.71z"></path>
    <path d="M6.29 7.71 7 7 7.71 6.29 6.71 5.29 5.71 4.29 5 5 4.29 5.71 5.29 6.71 6.29 7.71z"></path>
    <path d="M13 19 16 19 12 15 8 19 11 19 11 22 13 22 13 19z"></path>
  </svg>
);

export default SunRise;
