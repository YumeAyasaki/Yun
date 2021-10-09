const fetch = require("node-fetch")

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.content === "!inspire") {
            const url = "https://zenquotes.io/api/random";
            const response = await fetch(url);
            const data = await response.json();
            const quote = data[0]['q'] + " - " + data[0]["a"];
            
            await message.channel.send(quote);
        }
	},
};