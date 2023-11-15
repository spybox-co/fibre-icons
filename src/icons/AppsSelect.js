import * as React from "react";


const AppsSelect = (props) => {

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
      <title>AppsSelect</title>
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M4.5 3.5h-1v1h1v-1Zm0 4h-1v1h1v-1Zm0 4h-1v1h1v-1Zm4-4h-1v1h1v-1Zm0-4h-1v1h1v-1Zm4 4h-1v1h1v-1Zm-4 4h-1v1h1v-1Zm4-8h-1v1h1v-1Zm0 8h-1v1h1v-1Z"
        // stroke-linecap="square" 
        // stroke-linejoin="square"

      />
    </svg>
  );
};

export default AppsSelect;

  