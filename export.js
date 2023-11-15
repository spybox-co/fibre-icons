const {
  readFile,
  readdirSync,
  write,
  writeFile,
  writeFileSync,
} = require("fs");

// const parse = require('parse-svg-path');
const { parse } = require('svg-parser');
const extract = require('extract-svg-path');

const svgTemplate = require('./utils/svgTemplate');

const { promisify } = require("util");
const asyncReadFile = promisify(readFile);
const asyncWriteFile = promisify(writeFile);
const { transform } = require("@svgr/core");
const { optimize } = require('svgo');


const { iconTemplate } = require('./utils/iconReactTemplate');




const sourceFolder = './opt/icon';
const destFolder = './libs/svg';
const componentFolder = './src/icons';


const fileType = 'js';

// @See: private Github Package
// https://www.youtube.com/watch?v=2-77KhGWlRg


const originalSvgFileName = (string) => {
  return string.replace('.svg', '')
}

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
  const iconName = originalSvgFileName(file);

  const returnSvg = async (
    path = `${sourceFolder}/${file}`,
    dest = `${destFolder}/${file}`,
    component = `${componentFolder}/${createNameForReactComponent(file)}.${fileType}`
  ) => {
    const data = await asyncReadFile(path); // asyncReadFile

    // since fs.readFile returns a buffer, we should probably convert it to a string.
    const svgCode = data; //.toString(); // with write() need to buffer

    const svgCodeToString = data.toString(); // with write() need to buffer

    const optimizedSvgCode = await transform(
      svgCode,
      {
        plugins: [
          "@svgr/plugin-svgo",
          // "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        // prettierConfig: {
        //   semi: false,
        // },
        
        // icon: false,
        // ref: false,
        // replaceAttrValues: { '#000': "currentColor" },
        // svgProps: { 
        //   focusable: "true", 

        // },
        // https://github.com/gregberge/svgr/blob/main/packages/babel-plugin-transform-svg-component/src/index.ts
        // template: svgTemplate,
        // icon: 16,
        // ignoreExisting: false,
      },
      // {
      //   componentName: componentName, 
      //   ext: "js",
      // }
  
    );

    const result = optimize(svgCode, {
      path: 'path-to.svg', // recommended
      multipass: true // all other config fields are available here
    });
    
    const optimizedSvgString = result.data;
    /*


    */

    const parsedSvgVariables = parse(optimizedSvgString);
    const iconProperties = parsedSvgVariables.children[0].properties;
    const iconVariables = parsedSvgVariables.children[0].children[0].properties;

    const iconProps = {
      stroke: iconVariables.stroke,
      path: iconVariables.d,
      ...iconProperties,
    }

    const buildSvgIcon = svgTemplate(iconProps);


    // const pathData = jsCode; //extract(path);
    // const reactIcon = await creactSvgIcon({ componentName: componentName, pathData: pathData });


    // const reactIcon = iconTemplate({ componentName: componentName, pathData: pathData });

    // console.log("----------");
    // console.log(jsCode);
    // console.log("path:", typeof pathData, pathData);
    console.log("\n");

    console.log("component:", componentName, "| svg:", iconName);

    // console.log("→", path);
    // console.log("∅", dest);
    // console.log("optimized code:", typeof optimizedSvgString, optimizedSvgString);
    // console.log("optimized code:", typeof optimizedSvgCode, optimizedSvgCode);
    console.log("optimized code:", typeof parsedSvgVariables, parsedSvgVariables); // parsedSvgVariables.children[0].children
    console.log(buildSvgIcon);


    
    // For test only use
    // await asyncWriteFile(destFolder + '/jsx/' + componentName + '.jsx', reactIcon);
    // await asyncWriteFile(destFolder + '/jsx/' + componentName + '.jsx', jsCode);


    await asyncWriteFile(destFolder + "/" + iconName + ".svg", buildSvgIcon);
  };
  returnSvg();


});

// https://react-svgr.com/docs/node-api/

// https://github.com/carbon-design-system/carbon-icons/tree/master/src/svg




