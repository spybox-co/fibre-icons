/* 

    @DOCS: Template Inspirations

    https://github.com/feathericons/feather/blob/main/src/icon.js
    https://github.com/carbon-design-system/carbon/blob/main/packages/icon-helpers/src/toSVG.js

    Default ATTRs
    https://github.com/feathericons/feather/blob/main/src/default-attrs.json

*/



const svgTemplate = (props) => {

  const {
    // variables,
    // componentName,
    path, 
    height, 
    width
  } = props

  const defaultSize = 16;

  const Element = 
`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width || defaultSize}"
  height="${height || defaultSize}"
  fill="none"
  viewBox="0 0 ${width || defaultSize} ${height || defaultSize}"
>
  <path
    stroke="currentColor"
    stroke-width="1"
    d="${path}"
  />
</svg>`;


  return Element;
}

module.exports = svgTemplate