// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
// Token Constant
const { token } = require('./config/config.json');
// Adding in the module from running cron
const cron = require('node-cron');
// Model for DB update
const checkMember = require('../BeowulfBot/models/checkMember.js');


client.once('ready', () => {
	console.log('Time monitor active....');
});

cron.schedule('0 0 * * *', () => {
	console.log('--------------------');
	console.log('Daily Update Cron Job is now running.');
	checkMember.updateCheck(function(result) {
		console.log('--------------------');
		if(result) {
			console.log('Daily Update Cron Job has now completed with members updated.');
		}
		else {
			console.log('Cron Job has run, but no members were updated.');
		}
	});
}, {
	scheduled:true,
	timezone: 'America/New_York',
});

cron.schedule('0 9 * * Monday', () => {
	console.log('------------------------------');
	console.log('Promotion Check Cron Job is now running');
}, {
	scheduled: true,
	timezone: 'America/New_York',
});

client.login(token);