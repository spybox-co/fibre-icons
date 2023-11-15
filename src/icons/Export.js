import * as React from "react";


const Export = (props) => {

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
      <title>Export</title>
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M2.5 12v2a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-2m-1-5.5L8 2 3.5 6.5M8 2v10"
        // stroke-linecap="square" 
        // stroke-linejoin="square"

      />
    </svg>
  );
};

export default Export;

  