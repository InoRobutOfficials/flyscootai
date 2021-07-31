const { GuildMember } = require("discord.js");

module.exports = {
    name: 'rule',
    description: "List all commands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffdd03')
        .setTitle('Rules')
        .setDescription("**Flyscoot Malaysia server rules!**\n[1] Swearing - Swearing is NOT allowed. THIS INCLUDES ALL TEXT/VOICE CHATS!\n[2] Spam - Spamming a channel can lead to a channel mute or discord wide mute.\n[3] Wars - Do NOT argue in the Discord server, take it to a DM or another discord.\n[4] Ranting - If you have a problem you would like to address, DM a Staff member.\n[5] Disrespect - Do NOT disrespect anyone in the discord, this can lead to you being terminated from the group AND bekicked from discord. Continuous disrespecting in the discord will lead to a ban from discord. Both user and IP.\n[6] Please have your ROBLOX Username and group rank set as your name.\n[7] Don’t post, reference, or talk about sexually explicit content, politics, or real life events. This will result in a mute or a kick!\n[8] Don’t advertise other groups, Discord servers or other ROBLOX games in chat or voice channels.\n[9] Discrimination of ANY kind will result in a punishment.\n[10] Be sure to use the Voice Channels appropriately. If you’re found misusing them, you may be Server Muted or Moved.\n\n**General server rules**\n\n•No blank nicknames.\n•No inappropriate nicknames.\n•No sexually explicit nicknames.\n•No offensive nicknames.\n•No inappropriate profile pictures.\n•No offensive profile pictures.\n•Moderators reserve the right to change nicknames.\n\n**Text chat rules**\n\n•No asking to be granted roles/moderator roles.\n•No @mentioning spam.\n•No sexually explicit content.\n•No NSFW content.\n•No illegal content.\n•No piracy.\n•No hacking.\n•No publishing of personal information (including real names, addresses, emails, passwords, bank account and credit card information, etc.).\n•No personal attacks.\n•No harassment.\n•No racism.\n•No hate speech.\n•No dating/flirting useless your Super Hot like me fire\n•No trolling.\n•No advertisement this includes DM advertisement.\n•No Free Rank\n\n**If you not follow this rules you will get warned, if your warning 3 you will get kicked from our server**")
        

        message.channel.send(newEmbed);
    }

}