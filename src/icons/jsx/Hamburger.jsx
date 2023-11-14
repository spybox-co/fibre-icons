import * as React from "react";



const Hamburger = (props) => {

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
        d="M2.66675 8H13.3334M2.66675 4H13.3334M2.66675 12H13.3334"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default Hamburger;

  