const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Cracked Syfe YT | !help", {
    type: "WATCHING"
  });

});

bot.on('guildMemberAdd', member => {
  console.log('User' + member.user.tag + 'has joined the server!');

  var role = Collection.find('name', 'user');
  member.addRole(553026380909248532);
  if(!condition) return;

})

bot.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(channel => channel.name === "welcome");
  if(!channel) return;

  channel.send(`Welcome to FN Scrims and more, ${member}, go to #bot-spam and do !help to get started.`)
    
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

 

  let prefix = prefixes[message.guild.id].prefixes;
  if (!message.content.startsWith(prefix)) return;
  if (cooldown.has(message.author.id)) {
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    cooldown.add(message.author.id);
  }
    if(message.content == '!apply')
    {
      message.reply('https://docs.google.com/forms/d/e/1FAIpQLSe1SEnSpGEHjUljqujxuGGXaoZmr6huOQCL0zWACwYq2Yhy6g/viewform?usp=sf_link');
    };
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.on('guildMemberAdd', member => { //this will check when a new member has joined your server.
var role = member.guild.roles.find('name', 'Member'); //this will Look/find the role.
member.addRole(role) //this finally adds the role
});

bot.login(tokenfile.token);