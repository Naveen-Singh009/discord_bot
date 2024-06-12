import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
         GatewayIntentBits.MessageContent]
});


client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short id for "+ url,
        });
    }
    message.reply("hi from bot");
})

client.on('interactionCreate', (interaction)=>{
    console.log(interaction);
    interaction.reply("Pong!!")
    
})

client.login(`${process.env.DISCORD_ACCESS_TOKEN}`)

