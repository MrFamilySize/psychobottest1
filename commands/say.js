const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.reply("Usage: !say <message>");
    return;
  }
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
