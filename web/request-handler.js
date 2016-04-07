var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpGet = require('http-get'); //we added this but not sure if this is where it is needed
// require more modules/folders here!
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

  var fileName = archive.paths.siteAssets + '/index.html';
  var results;
  console.log("this is the exports.paths object", fileName)
  fs.readFile(fileName, 'utf8', function(err, data){
    if(err){
      throw err;
      console.log("#####################")
    } else {
      console.log(data)
      results = data.split('\n')
      console.log("*************",results)
      console.log(data);
      return data;
    }
  })

  // var actions = {
  //   GET: function(){
  //     //console.log('we in here!!!!!!', req.pipe(request(req.url)).pipe(res))
  //     req.pipe(request(req.url)).pipe(res)
  //     res.writehead(statusCode, httpHelp.headers)
  //     type: 'GET'
  //     url: 'http://api.joind.in/v2.1/talks/10889',
  //     data: {},
  //     dataType
  //     error: function() {
  //        $('#info').html('<p>An error has occurred</p>');
  //     },
  //     dataType: 'jsonp',
  //     success: function(data) {
  //        var $title = $('<h1>').text(data.talks[0].talk_title);
  //        var $description = $('<p>').text(data.talks[0].talk_description);
  //        $('#info')
  //           .append($title)
  //           .append($description);
  //     },
  //     type: 'GET'
  //   },

  //   POST: function(){

  //   },


  // };

  // archive.isUrlInList(req.url)
  // res.end(statusCode, httpHelp.headers);
};
