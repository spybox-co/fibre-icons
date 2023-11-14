import * as React from "react";
const Search = (props) => {
  console.log("Search"); // Icon is generated with custom template
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      focusable="true"
      {...props}
    >
      <path
        stroke="currentColor"
        d="m10 10 4.5 4.5m-3-8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default Search;
