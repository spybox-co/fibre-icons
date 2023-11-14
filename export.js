const {
  readFile,
  readdirSync,
  write,
  writeFile,
  writeFileSync,
} = require("fs");

const extract = require('extract-svg-path');

const template = require("./src/helpers/template");

const { promisify } = require("util");
const asyncReadFile = promisify(readFile);
const asyncWriteFile = promisify(writeFile);
const { transform } = require("@svgr/core");
const { optimize } = require('svgo');
// const fs = require("fs");

const sourceFolder = './libs/svg';
const destFolder = './src/icons';


const fileType = 'js';

// @See: private Github Package
// https://www.youtube.com/watch?v=2-77KhGWlRg

const createNameForReactComponent = (string) => {
  return string[0].toUpperCase() + string.substring(1).replace('.svg', '').replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '');
};

/* 
    @DOCS: returning SVG into React component file JSX
*/
// https://stackoverflow.com/questions/59327144/return-svg-from-a-function
// https://gist.github.com/christiannaths/d165e17ef212a7a4146e51c82068ee47
// https://stackoverflow.com/questions/54885842/how-to-copy-multiple-svg-files-into-a-templated-react-component-nodejs

// https://github.com/carbon-design-system/carbon/blob/main/packages/icon-helpers/src/getAttributes.ts
// https://github.com/carbon-design-system/carbon/blob/main/packages/icon-helpers/src/toSVG.js


/*
    @DOCS: SVGR Custom template


    https://react-svgr.com/docs/custom-templates/
*/


console.log("List of exported Icons to React components:"); 

readdirSync(sourceFolder).forEach((file) => {
  const componentName = createNameForReactComponent(file);

  const returnSvg = async (
    path = `${sourceFolder}/${file}`,
    dest = `${destFolder}/${createNameForReactComponent(file)}.${fileType}`
  ) => {
    const data = await asyncReadFile(path); // asyncReadFile

    // since fs.readFile returns a buffer, we should probably convert it to a string.
    const svgCode = data.toString(); // with write() need to buffer

    const pathData = extract(path);

    const result = await optimize(
      svgCode, {
        path: path, // path: 'path-to.svg',
        multipass: true,
        removeViewBox: false
      });
    const optimizedSvgCode = result.data;

    const jsCode = await transform(
      optimizedSvgCode,
      {
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        icon: false,
        ref: false,
        replaceAttrValues: { '#000': "currentColor" },
        svgProps: { 
          focusable: "true", 

        },
        // https://github.com/gregberge/svgr/blob/main/packages/babel-plugin-transform-svg-component/src/index.ts
        template: template,
        icon: 16,
        ignoreExisting: false,
      },
      {
        componentName: componentName, 
        ext: "js",
      }
  
    );

    const reactIcon = creactSvgIcon({ componentName: componentName, pathData: pathData });

    // console.log("----------");
    // console.log(jsCode);
    // console.log(optimizedSvgCode);
    console.log("\n");
    // console.log("component:", componentName);
    console.log("→", dest);
    console.log("from path only:", reactIcon);

    // await asyncWriteFile(dest, jsCode);

    await asyncWriteFile(destFolder + '/jsx/' + componentName + '.jsx', reactIcon);
    // For test only use
    // await asyncWriteFile(destFolder + '/jsx/' + componentName + '.jsx', jsCode);
    // await asyncWriteFile(destFolder + "/", jsCode);
  };
  returnSvg();
});

// https://react-svgr.com/docs/node-api/

// https://github.com/carbon-design-system/carbon-icons/tree/master/src/svg


const creactSvgIcon = (props) => {


  const Element = `import * as React from "react";



const ${props.componentName} = (props) => {

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
        d="${props.pathData}"
        stroke-linecap="round" 
        stroke-linejoin="round"

      />
    </svg>
  );
};
export default ${props.componentName};

  `;


  return Element;
}