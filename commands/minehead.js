const Discord = require('discord.js')

module.exports = {
    info: {
      name: "minehead",
      description: "minehead",
      usage: "[minehead]",
      aliases: ["cabecaminecraft", "cabeçaminecraft", "minecrafthead", "mine-head"]
    },
    run: async function (client, message, args) {
        if (args.length > 0) {
            const head = args[0]
            
            let embed = new Discord.MessageEmbed()
                .setTitle(`Cabeça de ${head}`)
                .setFooter(`${message.author.tag}`, message.author.displayAvatarURL() )
                .setImage(`https://mc-heads.net/head/${head}`)
            message.channel.send(embed)
            message.delete();
    
        }
        else{
            message.delete();
            message.channel.send(`${message.author} **Insira um nick**`)
                .then(msg => {
                    msg.delete({ timeout: 5000})
                })
            
        }
    }
}