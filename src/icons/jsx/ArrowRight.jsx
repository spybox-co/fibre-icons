import * as React from "react";



const ArrowRight = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      focusable="true"
      {...props}
    >
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M9.5 12.5L14 8L9.5 3.5 M14 8L1 8"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default ArrowRight;

  