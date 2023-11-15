import * as React from "react";



const ArrowUp = (props) => {

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
        d="M12.5 6.5L8 2L3.5 6.5 M8 2V15"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default ArrowUp;

  