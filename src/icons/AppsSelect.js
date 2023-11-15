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
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="M4.5 3.5H3.5V4.5H4.5V3.5Z M4.5 7.5H3.5V8.5H4.5V7.5Z M4.5 11.5H3.5V12.5H4.5V11.5Z M8.5 7.5H7.5V8.5H8.5V7.5Z M8.5 3.5H7.5V4.5H8.5V3.5Z M12.5 7.5H11.5V8.5H12.5V7.5Z M8.5 11.5H7.5V12.5H8.5V11.5Z M12.5 3.5H11.5V4.5H12.5V3.5Z M12.5 11.5H11.5V12.5H12.5V11.5Z"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default AppsSelect;

  