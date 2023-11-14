import * as React from "react";



const OpenNew = (props) => {

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
        d="M9 1.5H14.5M14.5 1.5V7M14.5 1.5L6.5 9.5M7 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V9"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default OpenNew;

  