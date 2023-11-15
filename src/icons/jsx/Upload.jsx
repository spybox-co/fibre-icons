import * as React from "react";



const Upload = (props) => {

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
        d="M13.5 4V2C13.5 1.72386 13.2761 1.5 13 1.5L3 1.5C2.72386 1.5 2.5 1.72386 2.5 2L2.5 4 M12.5 9.5L8 5L3.5 9.5 M8 15L8 5"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default Upload;

  