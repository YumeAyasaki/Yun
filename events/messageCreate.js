module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.content === "ping")
			await message.reply("pong");
	},
};