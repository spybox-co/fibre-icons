import * as React from "react";


const Resources = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      focusable="true"
      {...props}
    >
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M13 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.379 11.5 4.5 9.379 6.621 11.5 4.5 13.621 2.379 11.5ZM9.5 4.5h4M11.5 6.5v-4M3 3h3v3H3V3Z"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default Resources;

  