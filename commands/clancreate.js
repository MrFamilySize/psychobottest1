const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    let ccUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!ccUser) return errors.cantfindUser(message.channel);
    let creason = args.join(" ").slice(22);
    if(!creason) return errors.noReason(message.channel);
  
    let clancreateEmbed = new Discord.RichEmbed()
    .setDescription("Clan")
    .setColor("#ff0000")
    .addField("Wanted User", `${ccUser} with ID: ${ccUser.id}`)
    .addField("Requested By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", creason);
  
    let clancreatechannel = message.guild.channels.find(c => c.name === "clancreate");
    if(!clancreatechannel) return message.channel.send("Couldn't find reports channel.");
    clancreatechannel.send(clancreateEmbed);
}

module.exports.help = {
    name: "clancreate"
  }