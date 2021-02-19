const Discord = require('discord.js')

module.exports = {
    info: {
      name: "assaltar",
      description: "assaltar",
      usage: "[assaltar]",
      aliases: ["roubar", "assault", "theft", "steal"],
    },

run: async function (client, message, args) {
    let roubo = [
        "https://i.imgur.com/pxAXsrt.gif",
        "https://i.pinimg.com/originals/48/ea/d4/48ead47e30a4927c1dc76d92de406394.gif",
        "https://thumbs.gfycat.com/DimwittedActualAidi-size_restricted.gif",
        "https://media1.tenor.com/images/452ff1d490f6d4143258ad0a80a94b90/tenor.gif"

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
                .setDescription(`<@${message.author.id}> Assaltou <@${user.id}>`)
                .setImage(roubo[Math.floor(Math.random() * roubo.length)])
                .setFooter(`Clique no 🔁 para retribuir`)
                .setColor(`PURPLE`)
            message.channel.send(embed).then(async msg => {

                await msg.react("🔁")

                const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;


                const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })

                retribuirl.on('collect', r => {
                    const embedd = new Discord.MessageEmbed()
                        .setDescription(`<@${user.id}> Assaltou <@${message.author.id}> como vingança`)
                        .setImage(roubo[Math.floor(Math.random() * roubo.length)])
                        .setFooter(`Passa tudo`)
                        .setColor(`PURPLE`)
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