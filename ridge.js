// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
// Token Constant
const { prefix, token } = require('./config.json');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		// send back "Pong." to the channel the message was sent in
		console.log(message.author);
		message.channel.send('Pong.');
	}
	else if (message.content === `${prefix}pong`) {
		// send back "Pong." to the channel the message was sent in
		console.log(message.author.username);
		console.log(message.member._roles);

		message.channel.send('Cyka blyat!');
	}
});
// login to Discord with your app's token
client.login(token);