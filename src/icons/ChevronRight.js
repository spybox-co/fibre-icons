import * as React from "react";


const ChevronRight = (props) => {

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
      <title>ChevronRight</title>
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="m6 12 4-4-4-4"
        // stroke-linecap="square" 
        // stroke-linejoin="square"

      />
    </svg>
  );
};

export default ChevronRight;

  