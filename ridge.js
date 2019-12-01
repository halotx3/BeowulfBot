// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
// Token Constant
const { prefix, token } = require('./config/config.json');

const createMember = require('../BeowulfBot/models/addMember.js');
const date = require('date-and-time');
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	if(command === 'add-member') {
		console.log(message.author.username);
		console.log(message.author.id);
		// console.log(message.member._roles);
		if (!args.length) {
			return message.channel.send('```Operator, please specify the user to be added.```');
		}
		else if(message.mentions.users.first()) {
			const tagged = message.mentions.users.first();
			// Takes the current date in SQL Date format
			const dateFull = date.format(new Date(), 'YYYY-MM-DD');
			console.log(dateFull);

			createMember.addMember([tagged.username, tagged.id, dateFull], function(result) {
				console.log(result.insertId);
				message.channel.send('Operator, the user ' + '<@' + tagged.id + '>' + ' has been validated and added into the system!');
			});
		}
		else {
			message.channel.send('```Operation, please insert a valid user.```');
			console.log(`${args} is not a valid user, terminating addition.....`);
		}
	}
});
// login to Discord with your app's token
client.login(token);