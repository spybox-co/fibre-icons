const svgTemplate = (variables, { tpl }) => {
  return tpl`
    ${variables.jsx}

`
}

module.exports = svgTemplate