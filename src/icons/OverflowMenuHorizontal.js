import * as React from "react";
const OverflowMenuHorizontal = (props) => {
  console.log("OverflowMenuHorizontal"); // Icon is generated with custom template
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
        d="M3 7.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm10 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-5 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
      />
    </svg>
  );
};
export default OverflowMenuHorizontal;
