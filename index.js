// implement your API here
console.log('Starting Server...');
console.log("Hey what's up I'm a server");
console.log('Coffee or Tea sir?');

// Grab express
const express = require('express');
// Grab Data Base
const db = require('./data/db');
// define express
const server = express();

// display something | req = recieve | res = send
server.get('/',(req,res) => {
	res.send("Request recieved");

});

// display greeting for user's name
server.get('/greet/:name/',(req,res) => {
	const name = req.params.name;
	res.send(`Hello ${name}`);

});

// get users
server.get('/api/users',(req,res) => {
	db.find()
		.then((users) => {
			console.log('users?',users);
			res.json(users);
		})
		.catch(err => {
			res
				.status(500)
				.json({message: "Failed to get users"});
		});
});

// get user id's
server.get('/api/users/:id',(req,res) => {
	const { id } = req.params;
	db.findById(id)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res
				.status(500)
				.json({message: "Failed to get users"});
		})
	
});

// start listening on port:4000
const PORT = 4000;
server.listen(PORT, () => {
	console.log("Server is listening on port " + PORT);

});
