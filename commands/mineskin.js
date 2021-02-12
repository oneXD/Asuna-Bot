const Discord = require('discord.js')

module.exports = {
    info: {
      name: "mineskin",
      description: "mineskin",
      usage: "[mineskin]",
      aliases: ["minecraftskin", "skinminecraft", "mine-skin"]
    },
    run: async function (client, message, args) {
        if (args.length > 0) {
            const skin = args[0]
            let embed = new Discord.MessageEmbed()
                .setTitle(`Skin de ${skin}`)
                .setImage(`https://minotar.net/armor/body/${skin}/100.png`)
                .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
            message.channel.send(embed)
            message.delete();
        }
        else{
            message.channel.send(`${message.author} **Insira um nick**`)
                .then(msg => {
                    msg.delete({ timeout: 5000})
                })
            message.delete();
        }
    }
}