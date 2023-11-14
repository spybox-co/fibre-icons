import * as React from "react";



const Menu = (props) => {

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
        d="M2 3.5H14M2 6.5H14M2 9.5H14M2 12.5H14"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default Menu;

  