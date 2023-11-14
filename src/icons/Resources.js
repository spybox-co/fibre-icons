import * as React from "react";
const Resources = (props) => {
  console.log("Resources"); // Icon is generated with custom template
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
        d="M9.5 4.5h2m0 0h2m-2 0v2m0-2v-2M3 3h3v3H3V3Zm-.621 8.5L4.5 9.379 6.621 11.5 4.5 13.621 2.379 11.5ZM13 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
};
export default Resources;
