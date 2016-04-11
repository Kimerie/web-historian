var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpGet = require('http-get'); //we added this but not sure if this is where it is needed
// require more modules/folders here!
var urlParser = require('url');
var utils = require('./http-helpers')
var httpHelp = require('./http-helpers.js')
var fs = require('fs');


  var homePage = archive.paths.siteAssets + '/index.html';

  var actions = {
    'GET':  function(request, reponse){
            var parts = urlParser.parse(request.url);
            var urlPath = parts.pathname === '/' ? '/index.html' : parts.pathname
            utils.serveAssets(response, urlPath);
    },

    'POST': function(request, response){
      utils.collectData(request, function(data){
        var url='www.twitter.com';
        console.log(data);
        archive.isUrlInList(url, function(found){
          if(found){
            archive.isUrlArchived(url, function(exists){
              if(exists){
                //display page
              } else {
                //display loading
                };
              });
          } else {
            archive.addUrlToList(url, function(){
              utils.serveAssets(response, '/loading.html')
            });
          }
        });
      });
    }
  };


  exports.handleRequest = function(request, response){
    var action = action[request.method];
    if(action){
      action(request, reponse);
    } else {
      utils.sendRreponse(reponse, "Not Found", 404)
    }
};
