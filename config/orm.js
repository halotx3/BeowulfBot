const connection = require('../config/connection.js');

const orm = {

	// This will update the last checked date up by one every morning
	updateCheck: function(table, cb) {
		connection.query('UPDATE ?? SET lastchecked = lastchecked + 1', table, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	// Adds requested member to the database
	addMember: function(table, vals, cb) {
		connection.query('INSERT INTO ?? (username,usertagid,dateadded) VALUES (?)', [table, vals], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
};

module.exports = orm;