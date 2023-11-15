import * as React from "react";



const Export = (props) => {

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
        d="M2.5 12V14C2.5 14.2761 2.72386 14.5 3 14.5H13C13.2761 14.5 13.5 14.2761 13.5 14V12 M12.5 6.5L8 2L3.5 6.5 M8 2V12"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default Export;

  