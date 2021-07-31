module.exports = {
    name: 'kick',
    description: "This command kick a member!",
    execute(message, args){
        if(message.member.roles.cache.has('870623398127091714')){
             const member = message.mentions.users.first();
         if(member){
             const memberTarger = message.guild.members.cache.get(member.id)
             memberTarger.kick();
             message.channel.send("User has been kicked"); 
         }else{
             message.channel.send('You couldnt kick that member')
         }
        }
        
    }
}