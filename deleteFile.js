var fs = require('fs');

function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function (file) {
      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });

    console.log('Deleting directory "${path}"...');
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive('../chrysalis/node_modules/@chrysalis-api');




// var fs = require('fs');
// var dir = 'Build';
// if (!fs.existsSync(dir)){
//   fs.mkdirSync(dir);
// }



