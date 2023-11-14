import * as React from "react";
const OverflowMenuVertical = (props) => {
  console.log("OverflowMenuVertical"); // Icon is generated with custom template
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
        d="M8.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  );
};
export default OverflowMenuVertical;
