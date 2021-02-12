const Discord = require('discord.js')

module.exports = {
    info: {
      name: "kiss",
      description: "kiss",
      usage: "[kiss]",
      aliases: ["beijar"]
    },
    run: async function (client, message, args) {
        let kisses = [
            "https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722",
            "https://loritta.website/assets/img/actions/kiss/both/gif_287.gif",
            "https://media.tenor.com/images/115058ffa644506e8d48207f58b97e3f/tenor.gif",
            "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
            "https://media.tenor.com/images/d585ab12761bfd097bdcb4cc45922ffe/tenor.gif",
            "https://media.tenor.com/images/a496f6c08cdf01c97365e917d7a229dc/tenor.gif",
            "https://media.tenor.com/images/b2a19c9ce36a11fd90fe74dc5dca7825/tenor.gif",
            "https://media1.tenor.com/images/2165e6adfd32a9390689b892dd165766/tenor.gif?itemid=13855137",
            "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
            "https://media.tenor.com/images/c2315f0247a7447d74f36790fb788a14/tenor.gif",
            "https://media.tenor.com/images/a689eb8d7218efd810db6907ee0b7ae7/tenor.gif",
            "https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif"
    
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
                    .setDescription(`<@${message.author.id}> beijou <@${user.id}>`)
                    .setImage(kisses[Math.floor(Math.random() * kisses.length)])
                    .setFooter(`Clique no 🔁 para retribuir`)
                    .setColor(`RED`)
                message.channel.send(embed).then(async msg => {
    
                    await msg.react("🔁")
    
                    const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;
    
    
                    const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })
    
                    retribuirl.on('collect', r => {
                        const embedd = new Discord.MessageEmbed()
                            .setDescription(`<@${user.id}> beijou <@${message.author.id}>`)
                            .setImage(kisses[Math.floor(Math.random() * kisses.length)])
                            .setFooter(`Agora eu shippo ein`)
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