const {
  readdirSync,
  writeFile,
} = require("fs");

const extract = require('extract-svg-path');

const { promisify } = require("util");
// const asyncReadFile = promisify(readFile);
const asyncWriteFile = promisify(writeFile);
// const { transform } = require("@svgr/core");
// const { optimize } = require('svgo');


const iconReactTemplate = require('./utils/iconReactTemplate');

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

  const buildIcon = async (
    path = `${sourceFolder}/${file}`,
    dest = `${destFolder}/${createNameForReactComponent(file)}.${fileType}`
  ) => {
    
    
    const pathData = await extract(path);

    // const reactIcon = creactSvgIcon({ componentName: componentName, pathData: pathData });
    const reactIcon = iconReactTemplate({ componentName: componentName, pathData: pathData });

    console.log("\n");
    console.log("component:", componentName);
    console.log("→", dest);
    // console.log("React component code", reactIcon);

    await asyncWriteFile(destFolder + '/' + componentName + '.' + fileType, reactIcon);
  };
  buildIcon();
});
