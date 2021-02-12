const Discord = require('discord.js')

module.exports = {
    info: {
      name: "minecape",
      description: "minecape",
      usage: "[minecape]",
      aliases: ["capamine", "minecraftcape", "mine-cape", "capaminecraft"]
    },
    run: async function (client, message, args) {
        if (args.length > 0) {
            const cape = args[0]
            let embed = new Discord.MessageEmbed()
                .setTitle(`Capa da optifine de ${cape}`)
                .setImage(`http://s.optifine.net/capes/${cape}.png`)
                .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
            message.channel.send(embed)
        }
        else {
            message.channel.send(`${message.author} **Insira um nick**`)
                .then(msg => {
                    msg.delete({ timeout: 5000})
                })
        }

    }
}