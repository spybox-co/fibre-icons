import * as React from "react";


const Hamburger = (props) => {

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
      <title>Hamburger</title>
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"
        // stroke-linecap="square" 
        // stroke-linejoin="square"

      />
    </svg>
  );
};

export default Hamburger;

  