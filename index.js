const fs = require('fs');


console.log(`
----------------------------

  Hello! 
  Welcome to Fibre Icons ™

----------------------------
`);

console.log(`

`);
console.log("→ To run a react page with icons presentation use 'start' script:");
console.group();
console.info("$ npm run start -or- yarn start");
console.groupEnd();
console.log(`

`);
console.log("→ To develop icon builder use 'develop' script:");
console.group();
console.info("$ npm run develop -or- yarn develop");
console.groupEnd();





const dir = './opt/icons';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log(`

‣ Created directory ./opt/icons/
  For more information open ./opt/README.md and start creating icons.

`);
}

console.log(`

  ° ENJOY!

`);