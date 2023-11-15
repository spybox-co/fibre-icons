import * as React from "react";


const Download = (props) => {

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
        d="M2.5 12v2a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-2M3.5 6.5 8 11l4.5-4.5M8 1v10"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default Download;

  