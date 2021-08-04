// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// 'on' message. different from 'once.' can trigger multiple times
// whenever a message is sent to a channel the bot can see it will post it in the command console
client.on('message', message => {
	console.log(message.content);
});

// make the bot respond in chat itself
client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong!" to the channel the message was sent in
		message.channel.send('Pong!');
	}
})

// dotenv
const dotenv = require('dotenv');

dotenv.config();

client.login(process.env.TOKEN);