module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message, theUltimateGachaField) {
        try {
            if (message.content === "!collect") {
                if (theUltimateGachaField.status === true) {
                    message.channel.send("The gacha was already start.");
                }
                else {
                    message.channel.send("React to this message to sign in (?).").then((collectMessage) => {
                        collectMessage.react('👍');
                        theUltimateGachaField.status = true;
                        theUltimateGachaField.id = collectMessage.id;
                    });    
                } 
            }
      
        }
        catch(err) {
            console.log(err);
        }
	},
};