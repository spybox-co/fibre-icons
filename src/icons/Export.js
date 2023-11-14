import * as React from "react";
const Export = (props) => {
  console.log("Export"); // Icon is generated with custom template
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
        d="m8 2 4.5 4.5M8 2 3.5 6.5M8 2v10m-5.5 0v2a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-2"
      />
    </svg>
  );
};
export default Export;
