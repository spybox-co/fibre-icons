import * as React from "react";


const Map = (props) => {

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
        d="M6 2.5v10m4-9v10M9.987 3.497l-3.974-.994a.05.05 0 0 0-.026 0l-3.45.987a.05.05 0 0 0-.037.048v9.896a.05.05 0 0 0 .064.048l3.423-.978a.05.05 0 0 1 .026 0l3.974.993a.05.05 0 0 0 .026 0l3.45-.987a.05.05 0 0 0 .037-.048V2.566a.05.05 0 0 0-.064-.048l-3.423.978a.05.05 0 0 1-.026 0Z"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default Map;

  