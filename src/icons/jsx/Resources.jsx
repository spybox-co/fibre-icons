import * as React from "react";



const Resources = (props) => {

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
        d="M9.49998 4.5H11.5M11.5 4.5H13.5M11.5 4.5V6.5M11.5 4.5V2.5M2.99998 3H5.99998V6H2.99998V3ZM2.37866 11.5L4.49998 9.37868L6.6213 11.5L4.49998 13.6213L2.37866 11.5ZM13 11.5C13 12.3284 12.3284 13 11.5 13C10.6716 13 9.99998 12.3284 9.99998 11.5C9.99998 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default Resources;

  