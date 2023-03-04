// MADE BY EzBeatz Discord: | Akira#0666

const { Client } = require("discord.js-selfbot-v13");
const dotenv = require("dotenv");
require("dotenv").config();
const client = new Client({
	checkUpdate: false,
});


client.on("ready", async () => {
	console.log('Bot is online!')
	client.user.setActivity("Your Stream Status", { type: "STREAMING", url:"https://www.twitch.tv/your twitch channel" }).then(() => {
        client.Manager.init(client.user.id);
    });
})




client.login(process.env.TOKEN)