const Discord = require("discord.js")

const thist = "`"

const images = [
    "https://asunabot.ga/api/cdn/gif1.gif",
    "https://asunabot.ga/api/cdn/gif2.gif",
    "https://asunabot.ga/api/cdn/gif3.gif",
    "https://asunabot.ga/api/cdn/gif4.gif",
    "https://asunabot.ga/api/cdn/gif5.gif",
    "https://asunabot.ga/api/cdn/gif6.gif"
]

module.exports = {
    info:{
      name: "kick",
      description: "kick",
      usage: "[kick]",
      aliases: ["kick", "getout"]
    },
    run: async function (client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send('Você não tem permissão para isso')
            return;
        }
        //Importação da DATABASE local [data.json]
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)
        const reason = args.slice(1).join(' ');
        const mid = args[0].replace(/!/g, "").replace(/</g, "").replace(/>/g, "").replace(/&/g, "").replace(/@/g, "")
    
        if (message.mentions.members.first().id === mid){
            console.log("Pass")
        }
        else {
            message.channel.send(`${message.author}\n\nErrou feio, uso correto: '${thist}'kick @usuario <motivo>${thist}`)
            return;
        }
    
        if (!message.mentions.members.first()) {
            message.channel.send(`${message.author}\n\nErrou feio, uso correto: '${thist}'kick @usuario <motivo>${thist}`)
            return;
        }
        if (message.mentions.members.first().id == message.author.id) {
            message.channel.send`Errou feio, você não pode banir a si mesmo`
            return;
        }
    
        let sendchannel = db
        .get('servers')
        .find({ serverid: message.guild.id })
        .value()
        .channel
    
        console.log(sendchannel)
    
        if (sendchannel == "undefined") {
            message.channel.send("Nenhum canal de punições adicionado, cancelando ação...")
            return;
        }
    
        let embed = new Discord.MessageEmbed()
        .setTitle('**Kickado!**')
        .setColor('RANDOM')
        .setDescription(`\n\nUsuario Kickado: ${message.mentions.members.first()}\nID: ${thist}${message.mentions.members.first().id}${thist}\n\nAutor: ${message.author}\nID: ${thist}${message.author.id}${thist}\n\nMotivo: ${thist}${reason}${thist}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
    
        let target = message.guild.members.cache.get(mid)
    
      target.kick()
    
        client.channels.cache.get(sendchannel).send(embed)

    }
}