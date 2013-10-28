"use strict"
var fs = require('fs');

function convertThis(){
  if (process.argv.length > 2) {
    var myfile = process.argv[2];
    if (fs.existsSync(myfile)) {
      var content = fs.readFileSync(myfile, 'utf8');
      fs.writeFileSync(myfile, content.toUpperCase());
      console.log("Done");
    } else {
      console.log('File does not exist - ' + myfile);
    }

  }
}
exports.convert = convertThis;
