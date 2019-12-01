const orm = require('../config/orm.js');

const createMember = {
	addMember: function(vals, cb) {
		orm.addMember('svmembers', vals, function(res) {
			cb(res);
		});
	},
};

module.exports = createMember;