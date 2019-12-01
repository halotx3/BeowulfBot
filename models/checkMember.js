const orm = require('../config/orm.js');

const checkMember = {
	updateCheck: function(cb) {
		orm.updateCheck('svmembers', function(res) {
			cb(res);
		});
	},
};

module.exports = checkMember;