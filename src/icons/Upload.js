import * as React from "react";


const Upload = (props) => {

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
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M13.5 4V2a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2M12.5 9.5 8 5 3.5 9.5M8 15V5"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default Upload;

  