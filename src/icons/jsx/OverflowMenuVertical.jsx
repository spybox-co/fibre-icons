import * as React from "react";



const OverflowMenuVertical = (props) => {

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
        d="M8.5 3C8.5 3.27614 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.27614 7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C8.27614 2.5 8.5 2.72386 8.5 3Z M8.5 13C8.5 13.2761 8.27614 13.5 8 13.5C7.72386 13.5 7.5 13.2761 7.5 13C7.5 12.7239 7.72386 12.5 8 12.5C8.27614 12.5 8.5 12.7239 8.5 13Z M8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8Z"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default OverflowMenuVertical;

  