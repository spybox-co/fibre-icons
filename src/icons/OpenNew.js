import * as React from "react";


const OpenNew = (props) => {

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
        d="M7 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9M14.5 1.5l-8 8M9 1.5h5.5V7"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default OpenNew;

  