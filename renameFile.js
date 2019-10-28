const testFolder = '../chrysalis/node_modules/@chrysalis-api/';
const fs = require('fs');

let readFile = fs.readdir(testFolder, (err, files) => {
  files.map(file => {
    fs.rename(testFolder + file, testFolder + file.slice(10), err => {
      if (err) throw err;
    })
  });
});

