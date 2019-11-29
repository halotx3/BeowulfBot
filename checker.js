// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
// Token Constant
const { token } = require('./config.json');

// Adding in the module from running cron
const cron = require('node-cron');


client.once('ready', () => {
	console.log('Time monitor active....');
});

cron.schedule('0 9 * * Monday', () => {
	console.log('running job at 09:00 on Mondays Eastern Time');
}, {
	scheduled: true,
	timezone: 'America/New_York',
});

client.login(token);