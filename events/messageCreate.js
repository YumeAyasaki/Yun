module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
		if (message.content === "ping")
			message.reply("pong");
	},
};