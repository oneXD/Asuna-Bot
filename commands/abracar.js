const Discord = require('discord.js')

module.exports = {
    info: {
      name: "abracar",
      description: "abracar",
      usage: "[abracar]",
      aliases: ["abraçar", "huge"]
    },
    run: async function (client, message, args) {
        let huges = [
            "https://i.pinimg.com/originals/32/09/15/320915992153abde2070a076552344e7.gif",
            "https://64.media.tumblr.com/8f0f157fb73a72633a307722c21d2778/f0b6a1d0bbcb97e0-75/s400x600/e2384fdbf25239d13b9b6dcf615152f392380668.gifv",
            "https://i.pinimg.com/originals/5a/ac/62/5aac6270d9c29bb8c590c8d8c8162a21.gif",
            "http://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_00.gif",
            "https://i.pinimg.com/originals/b0/5d/9d/b05d9ddf76e6c18d4d52f327fd0d0c5d.gif"
    
        ];
    
        if (args.length > 0) {
            if (!message.mentions.members.first()) {
                message.channel.send(`${message.author} Não encontrei sua menção e sim um texto`)
            }
            else {
                let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
                const auth = message.author.tag
                const auth2 = message.mentions.users.first().username
                let embed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}> Abraçou <@${user.id}>`)
                    .setImage(huges[Math.floor(Math.random() * huges.length)])
                    .setFooter(`Clique no 🔁 para retribuir`)
                    .setColor(`RED`)
                message.channel.send(embed).then(async msg => {
    
                    await msg.react("🔁")
    
                    const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;
    
    
                    const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })
    
                    retribuirl.on('collect', r => {
                        const embedd = new Discord.MessageEmbed()
                            .setDescription(`<@${user.id}> Abraçou de volta <@${message.author.id}>`)
                            .setImage(huges[Math.floor(Math.random() * huges.length)])
                            .setFooter(`Fofo`)
                            .setColor(`RED`)
                        message.channel.send(embedd)
    
                    
                    })
    
                })
            }
        }
        else{
            message.channel.send(`${message.author} Não encontrei sua menção`)
        }
    }
}