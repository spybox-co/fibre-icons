import * as React from "react";
const Calendar = (props) => (
  <svg
    width={16}
    height={16}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 2h-2V1h-1v1H6V1H5v1H3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Zm0 11H3V6h10v7Zm0-8H3V3h2v1h1V3h4v1h1V3h2v2Z" />
  </svg>
);
export default Calendar;
