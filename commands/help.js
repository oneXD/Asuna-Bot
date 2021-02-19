const Discord = require('discord.js')

module.exports = {
    info: {
      name: "helpteste",
      description: "helpteste",
      usage: "[helpteste]",
      aliases: []
    },
    run: async function (client, message, args) {
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
}