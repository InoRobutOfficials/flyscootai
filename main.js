const Discord = require('discord.js'); 

const client = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MEMBERS,Discord.Intents.FLAGS.GUILD_MESSAGES]});
require('dotenv').config();
const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready' , () => {
    console.log('FlyScoot is online');
    client.user.setActivity('over FlyScoot', { type: 'WATCHING'})
});

client.on('messageCreate',message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'discord'){
        message.channel.send('https://discord.gg/q4vZyh9M8T')
    } else if (command === 'say'){
        client.commands.get('say').execute(message, args)
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args)
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args)
    } else if (command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord)
    } else if (command === 'rule'){
        client.commands.get('rule').execute(message, args, Discord)
    } 
})

client.login(process.env.DISCORD_TOKEN);