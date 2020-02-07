var data = require("../data.json");

exports.addFriend = function(request, response) {
	
	let friend={
		"name":request.query.name,
		"description":request.query.description,
		"imageURL":"http://lorempixel.com/400/400/people"
	}; 
	console.log('loading');
	data.friends.push(friend);  
	console.log(data);
	response.render('index',data);	
}