const fsextra = require("fs-extra");

fsextra.copy('../chrysalis-api/packages', '../chrysalis/node_modules/@chrysalis-api', function (err) {
  if (err) return console.error(err)
});
