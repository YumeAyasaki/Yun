module.exports = {
	name: 'messageReactionRemove',
	once: false,
	async execute(messageReaction, user, theUltimateGachaField ) {
		if (messageReaction.message.id === theUltimateGachaField.id && messageReaction._emoji.name === '👍') {
			for (const i in theUltimateGachaField.members) {
                if (theUltimateGachaField.members[i].id === user.id) {
                    theUltimateGachaField.members.splice(i, 1);
                    break;
                }
            }
			messageReaction.message.channel.send(`${user.username} have joined out (?).`);
		}
	},
};