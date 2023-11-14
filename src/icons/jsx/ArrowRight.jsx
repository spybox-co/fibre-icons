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
        d="M1 8H14M14 8L9.5 3.5M14 8L9.5 12.5"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default ArrowRight;

  