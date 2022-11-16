const {
  readFile,
  readdirSync,
  write,
  writeFile,
  writeFileSync,
} = require("fs");
const { promisify } = require("util");
const asyncReadFile = promisify(readFile);
const asyncWriteFile = promisify(writeFile);
const { transform } = require("@svgr/core");
// const fs = require("fs");

const sourceFolder = "./src/icons/svg";
const destFolder = "src/icons/react";

const fileType = 'js';

// const uf = (string) => {
//   if (string !== undefined)
//     return string[0].toUpperCase() + string.substring(1);
// };
const nameToReactComponent = (string) => {
  return string[0].toUpperCase() + string.substring(1).replace('.svg', '').replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '');
};

// https://stackoverflow.com/questions/59327144/return-svg-from-a-function
readdirSync(sourceFolder).forEach((file) => {
  const componentName = nameToReactComponent(file);

  const returnSvg = async (
    path = `${sourceFolder}/${file}`,
    dest = `${destFolder}/${nameToReactComponent(file)}.${fileType}`
  ) => {
    const data = await asyncReadFile(path); // asyncReadFile

    // since fs.readFile returns a buffer, we should probably convert it to a string.
    const svgCode = data.toString(); // with write() need to buffer

    const jsCode = await transform(
      svgCode,
      {
        plugins: [
          // "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        icon: false,
      },
      { componentName: componentName }
    );
    console.log("----------");
    console.log(jsCode);
    console.log("----------");
    console.log("component:", componentName);
    console.log("file:", dest);

    await asyncWriteFile(dest, jsCode);

    // await asyncWriteFile("src/icons/react/" + componentName + ".jsx", jsCode);
  };
  returnSvg();
});

// https://react-svgr.com/docs/node-api/

// https://github.com/carbon-design-system/carbon-icons/tree/master/src/svg
