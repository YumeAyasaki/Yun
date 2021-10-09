module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message, theUltimateGachaField) {
        try {
            if (message.content === "!roll") {
                if (theUltimateGachaField.status === false) {
                    message.channel.send("The gacha haven't start yet.");
                }
                else {
                    const lengthTemp = theUltimateGachaField.members.length;
                    const indexToRemove = Math.floor(Math.random() * lengthTemp);
                    message.channel.send(`${theUltimateGachaField.members[indexToRemove].user} turn to go.\nGood luck have fun.`);
                    // theUltimateGachaField.members.splice(indexToRemove, 1);
                    // Remove react
                    // Maybe get reaction collection from message id and then random from there...?
                }

                if (theUltimateGachaField.members.length === 0) {
                    theUltimateGachaField.status = false;
                    theUltimateGachaField.id = "";
                }
            }
        }
        catch(err) {
            console.log(err);
        }
	},
};