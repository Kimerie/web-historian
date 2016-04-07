var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpGet = require('http-get'); //we added this but not sure if this is where it is needed
// require more modules/folders here!
var httpHelp = require('./http-helpers.js')

exports.handleRequest = function (req, res) {
  // console.log("The request handler is the gate keeper.  The request method is: ", req.method,"The request url is: ", req.url)
  //res.writehead(statusCode, header)  header = httpHelp.headers
  //console.log(archive.isUrlInList(req.url))
  //console.log(req.get('/'))
  var statusCode = 200;

  var actions = {
    GET: function(){
      //console.log('we in here!!!!!!', req.pipe(request(req.url)).pipe(res))
      req.pipe(request(req.url)).pipe(res);
      res.writehead(statusCode, httpHelp.headers);
      type: 'GET',
      url: 'http://api.joind.in/v2.1/talks/10889',
      data: {--created at: objectID},
      dataType: 'application/json',

      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
      
      success: function(data) {
         var $title = $('<h1>').text(data.talks[0].talk_title);
         var $description = $('<p>').text(data.talks[0].talk_description);
         $('#info')
            .append($title)
            .append($description);
      },

    },

    POST: function(){

    },


  };

  //archive.isUrlInList(req.url)
  //res.end(statusCode, httpHelp.headers);
};
