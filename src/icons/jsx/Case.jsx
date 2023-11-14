import * as React from "react";



const Case = (props) => {

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
        d="M5.5 5.5V3C5.5 2.72386 5.72386 2.5 6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V5.5M5.5 5.5H10.5M5.5 5.5H4M10.5 5.5H12M12 5.5H14C14.2761 5.5 14.5 5.72386 14.5 6V13C14.5 13.2761 14.2761 13.5 14 13.5H12M12 5.5V13.5M12 13.5H4M4 5.5H2C1.72386 5.5 1.5 5.72386 1.5 6V13C1.5 13.2761 1.72386 13.5 2 13.5H4M4 5.5V13.5"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default Case;

  