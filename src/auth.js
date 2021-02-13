const fs = require('fs')
var tokens;

fs.watch(buttonPressesLogFile, (event, filename) => {
   if (filename) {
     tokens=JSON.parse(fs.readFileSync( __dirname + "/../" + "keys/tokens.json", 'utf8'))
   }
 });

module.exports = {
    authToken: function(key) {
        authenticated = false;
        for (i = 0; i < tokens.length; i++) {
           if (tokens[i]==key) {
              return true;
           }
        }
        return false;
    }
  };