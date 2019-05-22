const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("MANAGE_ROLES")) {
        let modembed = new Discord.RichEmbed()
            .setDescription("Recruit Menu")
            .setColor("#ff0000")
            .addField("Requirements", "**You must record a interveiw and save it!!**")
            .addField("Questions", "This is the questions you need to ask in a interview")
            .addField("Message Apllicant", "```Hey **Name**, we were looking at your application we were wanting to ask you a couple of questions, join the **#waiting** channel.```")
            .addField("1.", "What region are you?")
            .addField("2.", "How old are you?")
            .addField("3.", "Do you record/stream gameplay?")
            .addField("4.", "Do you have clips?")
            .addField("5.", "Whats your channel name?")
            .addField("6.", "How many Subs/Followers do you have?")
            .addField("7.", "Why do you wanna join our clan?")
            .addField("8.", "What role would you take in our clan? (GFX Designer, competitive player, content creator or other?")
            .addField("9.", "Have you been in other Clans/Orgs? (Whats there Name?)")
            .addField("10.", "Would you be willing change your name? (When was the last time you changed your name?)");


        try {
            await message.author.send(modembed);
            message.react("👍");
        } catch (e) {
            message.reply("Your DMs are locked. I cannot send you the Recruit Menu.");
        }
}
}
module.exports.help = {
    name: "recruit"
  }
