/* eslint-disable prefer-const */
require('dotenv').config();
const mysql = require('mysql');

let connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'beowulf_db',
});

// Creates the connection to the database
connection.connect(function(err) {
	if (err) {
		// console.log(process.env.RDS_DB);
		console.error('error connecting: ' + err.stack);
		// console.log(process.env.RDS_DB);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;