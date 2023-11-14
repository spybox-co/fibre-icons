import * as React from "react";
const Menu = (props) => {
  console.log("Menu"); // Icon is generated with custom template
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      focusable="true"
      {...props}
    >
      <path stroke="currentColor" d="M2 3.5h12m-12 3h12m-12 3h12m-12 3h12" />
    </svg>
  );
};
export default Menu;
