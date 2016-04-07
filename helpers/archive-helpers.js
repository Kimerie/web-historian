var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var pathExists = require('path-exists');
var httpGet = require('http-get');
var  mime = require("mime");
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt') //turns paths to text?
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  //paths.list
  //console.log("INSIDE readListOfUrls")
};

console.log('url in path object', JSON.parse(this.paths.list)


exports.isUrlInList = function(){
  console.log('what is this object', this.paths);
  var fileName = this.paths.list;
  path.exists(fileName, function(exists) {

  if(!exists) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found\n");
    response.end();
    return;

  }else{
    fs.stat(fileName, function (error, stats) {
      fs.open(fileName, "r", function (error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          console.log(data);
          fs.close(fd);
        });
      });
    });

  }

  if (fs.stat(fileName).isDirectory()) url += '/index.html';

    // fs.readFile(url, "binary", function(err, file) {
    //   if(err) {
    //     response.writeHead(500, {"Content-Type": "text/plain"});
    //     response.write(err + "\n");
    //     response.end();
    //     return;
    //   }

  response.writeHead(200, {"Content-Type": mime.lookup(url)});
  response.write(file, "binary");
  response.end();
    // });

  });
  //paths.list
  // console.log("***************", exports.paths.archivedSites(theUrl));
  //if the url is in the list return true
  // pathExists(theUrl).then(function(exists){
  //   if(exists){
  //     exports.paths.archivedSites(theUrl)
  //   } else {
  //     console.log(404);
  //   }
  // });
  //console.log("INSIDE isUrlInList")
};

exports.addUrlToList = function(){
  //paths.list
  //console.log("INSIDE is in addUrlToList")
};

exports.isUrlArchived = function(){
  //paths.archivedSites
  //conditional statement to determine if it is in the archived sites path
  //if it is return the path to archived site

  //if url is in the list return true
  //console.log("INSIDE isUrlArchived")
};

exports.downloadUrls = function(){
  //console.log("INSIDE is in downloadUrls");
};
