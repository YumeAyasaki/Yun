module.exports = {
	name: 'messageReactionAdd',
	once: false,
	async execute(messageReaction, user, theUltimateGachaField ) {
		if (messageReaction.message.id === theUltimateGachaField.id && messageReaction._emoji.name === '👍') {
			var duplicate = false;
			theUltimateGachaField.members.forEach(member => {
				if (user.id === member.id) {
					duplicate = true;
				}
			});
			if (duplicate) return;
			theUltimateGachaField.members.push({user: user.username, id: user.id, });
			messageReaction.message.channel.send(`${user.username} have joined.`);
		}
		
	},
};