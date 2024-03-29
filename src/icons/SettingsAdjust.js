import * as React from "react";


const SettingsAdjust = (props) => {

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
      <title>SettingsAdjust</title>
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M15 4.5H7.5m-4 0H1m0 7h7.5m4 0H15m-7.5-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        // stroke-linecap="square" 
        // stroke-linejoin="square"

      />
    </svg>
  );
};

export default SettingsAdjust;

  