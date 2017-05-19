
var path = require("path");
 // file should include two routes:
var friends = require("../data/friends");


module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
    res.json(friends);
  	});
	app.post("/api/friends", function(req, res){
	friends.push(req.body);
	});
};




// // apiRoutes.js file should contain two routes:

// // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// app.get("/api/friends", function(req, res){
// 	// app.JSON() of all possible friends
// 	  var friends = req.params.friends;
//   if (friends) {
//     console.log(friends);

//     for (var i = 0; i < characters.length; i++) {
//       if (friends === friends[i].routeName) {
//         return res.json(friends[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// app.post("/api/friends", function(req, res){
// 	//incoming survey results
// 	$("#submit").on("click", function(){

	
// 	var newFriend = req.body;
// 	newFriend = { 
//   	routeName: newFriend.name.replace(/\s+/g, "").toLowerCase();
//   	name : $("#name").val().trim(),
//   	photo: $("#photo").val().trim(),
//   	scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
// 	};

//   	console.log(newFriend);
// 	friends.push(newFriend);
// 	res.json(newFriend);

// 	//compatibility logic
// 	for (var i =0; i<data.length; i++){
// 		match(data[i].photo, data[i].name);
// 	}
// });
// });