var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpGet = require('http-get'); //we added this but not sure if this is where it is needed
// require more modules/folders here!
var urlParser = require('url');
var utils = require('./http-helpers')
var httpHelp = require('./http-helpers.js')
var fs = require('fs');


exports.handleRequest = function (req, res) {
  // console.log("The request handler is the gate keeper.  The request method is: ", req.method,"The request url is: ", req.url)
  //res.writehead(statusCode, header)  header = httpHelp.headers
  //console.log(archive.isUrlInList(req.url))
  //console.log(req.get('/'))
  var statusCode = 200;

  // if(req.url === '/'){
  //   res.end('<input')
  // }
  var homePage = archive.paths.siteAssets + '/index.html';

  var actions = {
    'GET':  function(request, reponse){
            var parts = urlParser.parse(request.url);
            parts.pathname;
          },
    'POST': function (request, reponse){

    }
  };
};

  exports.handleRequest = function(request, response){
    var action = actions[request.method];
    if(action){
      action(request, reponse);
    } else {
      utils.sendRreponse(reponse, "Not Found", 404)
    }
};
