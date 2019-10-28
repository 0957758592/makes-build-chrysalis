const execSync = require('child_process').execSync;

execSync('node ../chrysalis-api/build/deleteFile.js');
process.chdir("../chrysalis-api/");
execSync('yarn');
execSync('node_modules/.bin/lerna run build');
execSync('node ../chrysalis-api/build/copyFile.js');
execSync('node ../chrysalis-api/build/renameFile.js');
process.chdir("../chrysalis");
execSync('yarn run build:linux');

const delay = min => new Promise(res => setTimeout(res, min*60*1000));
delay(3)

const distFolder = '../chrysalis/dist/';
const fs = require('fs');
let readFile = fs.readdir(distFolder, (err, files) => {

  files.forEach(file => {

    if (file.slice(-8) === 'AppImage') {
      execSync(`../chrysalis/dist/${file}`);
    }
  });
});

