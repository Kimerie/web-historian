var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpGet = require('http-get') //we added this but not sure if this is where it is needed
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log("The request handler is the gate keeper.  The request method is: ", req.method, "The request url is: ", req.url)
  res.end(archive.paths.list);
};
