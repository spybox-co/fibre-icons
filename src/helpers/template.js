const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
\n
${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {

  console.log("${variables.componentName}");

  // Icon is generated with custom template for SVGR

  return (
    ${variables.jsx}
  )
};

${variables.exports};
`
}

module.exports = template