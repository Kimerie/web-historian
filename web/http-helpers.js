var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 120, // Seconds.
  'Content-Type': "text/html"
};

exports.sendResponse = function(response, obj, status){
  status = status || 200;
  response.wroteHead(status,headers);
  response.end(obj);
};

exports.collectData = function(request, callback){
  var data = "";
  request.on("data", function(chunk){
    data +=chunk;
  });
  request.on("end", function(chunk){
    callback(data);
  });
};

exports.serveAssets = function(res, asset, callback) {
  var encoding = {encoding : 'utf8'};

  fs.readFile(archive.paths.siteAssets + asset, encoding, function(err, data){
    if(err){
      fs.readFile(archive.paths.archivedSites + asset, encoding, function(err, data){
        if(err){
          exports.send404(res);
        } else {
          exports.sendResponse(res, data);
        }
      });
    } else{
      exports.sendResponse(res,data);
    }
  });
};


  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)


  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

// As you progress, keep thinking about what helper functions you can put here!
