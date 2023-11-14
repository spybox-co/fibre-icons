import * as React from "react";
const ArrowDown = (props) => {
  console.log("ArrowDown"); // Icon is generated with custom template
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      focusable="true"
      {...props}
    >
      <path stroke="currentColor" d="M8 14 3.5 9.5M8 14l4.5-4.5M8 14V1" />
    </svg>
  );
};
export default ArrowDown;
