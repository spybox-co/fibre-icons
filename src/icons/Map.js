import * as React from "react";
const Map = (props) => {
  console.log("Map"); // Icon is generated with custom template
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      focusable="true"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 12.4-3.5 1.1V3.6L6 2.5m0 9.9 4 1.1m-4-1.1V2.5m4 11 3.5-1.1V2.5L10 3.6m0 9.9V3.6m0 0L6 2.5"
      />
    </svg>
  );
};
export default Map;
