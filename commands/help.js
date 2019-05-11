const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
        .setTitle("Help")
        .setAuthor("FN Bot")
        .setDescription("Help Menu")
        .setColor("#ffffff")
        .addField("Member Commands", "!help, !apply, !serverinfo, !botinfo, !userinfo, and !report.")
        .addField("More Help", "!help <command>");

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