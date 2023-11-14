import * as React from "react";



const Map = (props) => {

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
        d="M6 12.4L2.5 13.5L2.5 3.6L6 2.5M6 12.4L10 13.5M6 12.4L6 2.5M10 13.5L13.5 12.4L13.5 2.5L10 3.6M10 13.5L10 3.6M10 3.6L6 2.5"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default Map;

  