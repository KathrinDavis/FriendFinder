
var path = require("path");
 // file should include two routes:



module.exports = function(app) {
	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

	app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};