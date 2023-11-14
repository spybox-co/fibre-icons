import * as React from "react";
const OpenNew = (props) => {
  console.log("OpenNew"); // Icon is generated with custom template
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
        d="M9 1.5h5.5m0 0V7m0-5.5-8 8m.5-7H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9"
      />
    </svg>
  );
};
export default OpenNew;