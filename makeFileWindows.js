const execSync = require('child_process').execSync;
const delay = min => new Promise(res => setTimeout(res, min*60*1000));

execSync('node ../chrysalis-api/build/deleteFile.js');
process.chdir("../chrysalis-api/");
execSync('yarn');
delay(1)
process.chdir("../chrysalis-api/");
execSync('node_modules\\.bin\\lerna run build');
execSync('node ../chrysalis-api/build/copyFile.js');
execSync('node ../chrysalis-api/build/renameFile.js');
process.chdir("../chrysalis");
execSync('yarn run build:windows');

delay(3)

const distFolder = '..\\chrysalis\\dist\\';
const fs = require('fs');
let readFile = fs.readdir(distFolder, (err, files) => {

  files.forEach(file => {

    if (file.slice(-3) === 'exe') {
      execSync(`..\\chrysalis\\dist\\${file}`);
    }
  });
});

