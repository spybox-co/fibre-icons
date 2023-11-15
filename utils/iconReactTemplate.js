

const iconReactTemplate = (props) => {

  // const {
  //   //variables,
  //   componentName,
  //   pathData, 
  //   size = 16,
  // } = props

const defaultSize = 16;
  const Element = 
`import * as React from "react";


const ${props.componentName} = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${props.size || defaultSize}"
      height="${props.size || defaultSize}"
      fill="none"
      viewBox="0 0 ${props.size || defaultSize} ${props.size || defaultSize}"
      focusable="true"
      {...props}
    >
      <path
        stroke="currentColor"
        stroke-width="1"
        vector-effect={props.nonScaling ? "non-scaling-stroke" : null}
        d="${props.pathData}"
        // stroke-linecap="round" 
        // stroke-linejoin="round"

      />
    </svg>
  );
};

export default ${props.componentName};

  `;


  return Element;
}

module.exports = iconReactTemplate