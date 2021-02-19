const Discord = require("discord.js");
const cliente = require('nekos.life');
const neko = new cliente();

module.exports = {
    info: {
      name: "wallpaper",
      description: "wallapaper",
      usage: "[wallpaper]",
      aliases: ["background", "papeldeparede"]
    },
    run: async function (client, message, args) {
        const nekojson = await neko.sfw.wallpaper()

    const aEmbed = new Discord.MessageEmbed()

    .setDescription(`Wallpaper apagado...`)
    .setColor("ee82ee")

    const exEmbed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Baixe o wallpaper Aqui")
    .setDescription(`${message.author} Seu novo wallpaper. \n caso queira apagar clica na reação`)
    .setURL(nekojson.url)
    .setImage(nekojson.url)
    .setFooter("algumas imagens podem conter nsfw clique em ❌ para apagar")

      message.channel.send(exEmbed).catch(err => message.channel.send(erros)).then(async msg => {
        await msg.react("❌")

        const cookie = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id == usuario.id

        const cookiel = msg.createReactionCollector(cookie, { max: 1 })

        cookiel.on('collect', r => {
            msg.edit(aEmbed)
        })

    })
    }
}