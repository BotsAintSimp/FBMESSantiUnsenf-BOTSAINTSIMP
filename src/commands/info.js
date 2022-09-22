module.exports = async (matches, event, api, extra) => {
    let typeStop = api.sendTypingIndicator(event.threadID, (err) => {
    	if(err) return console.error(err);
    
        api.getUserID("John Roy Lapida Calimlim", (err, data) => {
        	let message = "🗂️ BotsAintSimp Info 🗂️";
            message += "\n💻 Bot by: John Carl Faustino\n(©: John Roy L. Calimlim)";
            message += "\n🤖 Description: BotsAintSimp is a facebook messenger chat bot made using NodeJS, Axios and the Unofficial Facebook Chat API.";
            message += "\n\n© 2022";
            
            let messageBody = {
            	body: message,
                mentions: [{
                    tag: "@John Roy L. Calimlim",
                    tag: "@John Carl Faustino",
                    id: data[0].userID
                }]
            };
            
            api.sendMessage(messageBody, event.threadID, event.messageID);
            typeStop();
        });
    });
};