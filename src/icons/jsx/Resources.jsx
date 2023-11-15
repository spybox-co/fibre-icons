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
        d="() => extract(optimizedSvgCode)"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default Resources;

  