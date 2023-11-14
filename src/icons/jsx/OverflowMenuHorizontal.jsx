import * as React from "react";



const OverflowMenuHorizontal = (props) => {

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
        d="M3 7.5C3.27614 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.27614 8.5 3 8.5C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5Z M13 7.5C13.2761 7.5 13.5 7.72386 13.5 8C13.5 8.27614 13.2761 8.5 13 8.5C12.7239 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.7239 7.5 13 7.5Z M8 7.5C8.27614 7.5 8.5 7.72386 8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5Z"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default OverflowMenuHorizontal;

  