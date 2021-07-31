module.exports = {
    name: 'say',
    description: "Says a messages inputted",
    execute(message, args, Discord) {
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}