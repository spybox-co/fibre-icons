import * as React from "react";
const Upload = (props) => {
  console.log("Upload"); // Icon is generated with custom template
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
        d="M13.5 4V2a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2M8 5l4.5 4.5M8 5 3.5 9.5M8 5v10"
      />
    </svg>
  );
};
export default Upload;
