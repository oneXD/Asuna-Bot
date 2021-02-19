const Discord = require('discord.js')

module.exports = async (client, message) => {

  if (message.author.bot) return;

  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const arg2 = message.content.trim().split(/ +/g);

  if (message.content.startsWith("<@809225623994236939>")) {
    let desc =
    `Olá ${message.author}, eu me chamo Asuna e eu sou apenas um simples bot para o Discord!

    Com funcionalidades para brincadeiras e futuramente para moderação
    
    E eu ainda to tentando achar o maldito do **Kirito**
    
    <:gabi:782057648673128498> Lista de Comandos
    https://asunabot.ga/commands
    <:noice:790767970472165376> Me quer em seu servidor? clique aqui
    https://asunabot.ga/invite
    <:hmm:782056369759060019> Site, onde vc encontra tudo que você precisa saber
    https://asunabot.ga
    `

    let embed = new Discord.MessageEmbed()
    .setTitle('Me Chamou?')
    .setThumbnail('https://asunabot.ga/api/cdn/asuna.webp')
    .setColor("RED")
    .setDescription(desc)

    message.channel.send(message.author, embed)
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command);
  //Searching a command aliases
  const aliases = client.commands.find(x => x.info.aliases.includes(command))

  //if(message.channel.type === "dm")return message.channel.send("None of the commands work in DMs. So please use commands in server!")
process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});
require('events').EventEmitter.defaultMaxListeners = 25


  //Executing the codes when we get the command or aliases
  if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return
};
