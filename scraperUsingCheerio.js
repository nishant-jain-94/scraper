var cheerio = require('cheerio');
var request = require('request');
request('https://docs.angularjs.org', function(error,response,body){
  var $ = cheerio.load(body);
  console.log($.html());
})
