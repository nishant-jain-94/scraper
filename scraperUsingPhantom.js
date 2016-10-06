var page = require('webpage').create();

page.open('https://docs.angularjs.org/api', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    console.log(page);
    var body = page.evaluate(function() {
      return document.body;
    });
    console.log(page.content);
  }
  phantom.exit();
});
