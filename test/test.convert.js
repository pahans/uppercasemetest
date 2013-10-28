var assert = require('assert'),
  convertText = require('./../lib/uppercasemetest').convert;

suite('uppercase',
  function() {
    test('text should turn to uppercase',
      function() {
        var fs = require('fs');
        // var myfile = "toUpercase.txt";
        convertText();
        var content = fs.readFileSync("./test/toUpercase.txt", 'utf8');
        
        assert.equal(content,"HELLO METEORHACKS");
      });
  });