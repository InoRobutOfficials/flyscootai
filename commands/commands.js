module.exports = {
    name: 'commands',
    description: "List all commands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffdd03')
        .setTitle('FlyScoots Cmds')
        .setDescription('Listed all of the commands')
        .addFields(
            {name: '.kick', value: 'Kick a member'},
            {name: '.ban', value: 'Ban a member'},
            {name: '.say', value: 'Says a messages inputted'}
        )
        .setFooter('More commands will be added');

        message.channel.send(newEmbed);
    }
}