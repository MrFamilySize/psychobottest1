const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setAuthor("FN Bot")
        .setDescription("Help Menu")
        .setColor("#ff0000")
        .addField("More Help", "!help <command>")
        .addField("!help", "This is the command your using if your a moderator check dm's for the commands")
        .addField("!report", "Use this command to report breaking TOS or the server rules")
        .addField("!serverinfo", "This command explains our server and tells what it does")
        .addField("!clancreate", "this command allows you to create a server clan giving you roles bots logos and channels to access free")
        .addField("!botinfo", "This command tell you info about our bot");


    message.channel.send(helpembed);
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let modembed = new Discord.RichEmbed()
            .setDescription("Mod Help Menu")
            .setColor("#ff0000")
            .addField("Mod Commands", "!addrole, !removerole, !kick, !ban, !clear and !say.");

        try {
            await message.author.send(modembed);
            message.react("👍");
        } catch (e) {
            message.reply("Your DMs are locked. I cannot send you the mod commands.");
        }
    }
}

module.exports.help = {
    name: "help"
}