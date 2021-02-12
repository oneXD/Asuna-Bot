const Discord = require('discord.js')

module.exports = {
    info: {
      name: "avatar",
      description: "avatar",
      usage: "[avatar]",
      aliases: ["profile", "perfil", "imagem"],
    },

run: async function (client, message, args) {
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author; 
    
    let avatar = user.displayAvatarURL({ dynamic: true, size: 4096 }) //aqui pega a imagem do avatar 
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`avatar de ${user.username}`)
       .setDescription(`**[Baixe o Avatar Aqui](${avatar})**`) 
        .setImage(avatar)
       .setFooter(`${message.author.tag}`, message.author.displayAvatarURL() )
      .setColor('RANDOM') 
    
    message.channel.send(embed)
    message.delete();

    }
}