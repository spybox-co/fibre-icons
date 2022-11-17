import * as React from "react";
const Map = (props) => (
  <svg
    width={16}
    height={16}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.796 2.097A.5.5 0 0 1 14 2.5v9.9a.5.5 0 0 1-.35.477l-3.5 1.1a.5.5 0 0 1-.283.005l-3.858-1.06-3.36 1.055A.5.5 0 0 1 2 13.5V3.6a.5.5 0 0 1 .35-.477l3.5-1.1a.5.5 0 0 1 .283-.005l3.858 1.06 3.36-1.055a.5.5 0 0 1 .445.074ZM9.5 3.98l-3-.825v8.863l3 .825V3.98Zm1 8.838V3.967l2.5-.786v8.852l-2.5.786Zm-5-.786V3.181L3 3.967v8.852l2.5-.786Z"
      fill="#000"
    />
  </svg>
);
export default Map;
