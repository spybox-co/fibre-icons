import * as React from "react";


const OverflowMenuVertical = (props) => {

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
      <title>OverflowMenuVertical</title>
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M8.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        // stroke-linecap="square" 
        // stroke-linejoin="square"

      />
    </svg>
  );
};

export default OverflowMenuVertical;

  