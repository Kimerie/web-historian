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
  list: path.join(__dirname, '../archives/sites.txt'), //turns paths to text?
  testList: path.join(__dirname, '../testData/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  var fileName = this.paths.list;
  fs.readFile(fileName, function(err, sites){
    sites = sites.toString().split('\n')
    if(callback){
      callback(sites);
    }
  });
  // var results;
  // console.log("this is the exports.paths object", fileName)
  // fs.readFile(fileName, 'utf8', function(err, data){
  //   if(err){
  //     throw err;
  //     console.log(data)
  //   } else {
  //     console.log(data)
  //     results = data.split('\n')
  //     console.log("*************",results)
  //     return data;
  //   }
  // })
  //search through file's text for URL
  //paths.list
  //console.log("INSIDE readListOfUrls")
// console.log('url in path object', this.paths.list)
};



exports.isUrlInList = function(callback){
  exports.readListOfUrls(function(sites){
    var found = _.any(sites, function(site, i){
      return site.match(url)
    })
    callback(found);
  });
};

// var fileName = this.paths.list;
//   fs.stat(fileName, function(error, stats){
//     if(error){
//       response.writeHead(404, {"Content-Type": "text/plain"});
//        response.write("404 Not Found\n");
//        response.end();
//     }else{
//       fs.open(fileName, 'r', function (error, fd){
//         var buffer = new Buffer(stats.size);
//         fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
//             var data = buffer.toString("utf8", 0, buffer.length);
//             console.log(data);
//             fs.close(fd)
//         });
//       });
//     }
//   });
// };

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
