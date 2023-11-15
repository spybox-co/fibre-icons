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
        d="M6 2.5V12.5M10 3.5V13.5 M9.98701 3.49675L6.01299 2.50325C6.00448 2.50112 5.99556 2.50127 5.98713 2.50368L2.53626 3.48964C2.5148 3.49577 2.5 3.51539 2.5 3.53772V13.4337C2.5 13.4669 2.5318 13.4909 2.56374 13.4818L5.98713 12.5037C5.99556 12.5013 6.00448 12.5011 6.01299 12.5032L9.98701 13.4968C9.99552 13.4989 10.0044 13.4987 10.0129 13.4963L13.4637 12.5104C13.4852 12.5042 13.5 12.4846 13.5 12.4623V2.56629C13.5 2.53307 13.4682 2.50908 13.4363 2.51821L10.0129 3.49632C10.0044 3.49873 9.99552 3.49888 9.98701 3.49675Z"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};
export default Map;

  