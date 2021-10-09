const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { boolean } = require('webidl-conversions');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });

// Gacha
const theUltimateGachaField = {
	status: false,
	members: [],
	id: "",
}

// Events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (file.startsWith("gacha")) {
		client.on(event.name, (...args) => event.execute(...args, theUltimateGachaField));
	}
	else if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);