const Discord = require('discord.js')

module.exports = {
    info: {
      name: "morder",
      description: "morder",
      usage: "[morder]",
      aliases: ["bite"]
    },
    run: async function (client, message, args) {
        let mordidas = [
            "https://media1.tenor.com/images/d97e4bc853ed48bf83386664956d75ec/tenor.gif",
            "https://i.pinimg.com/originals/17/9a/16/179a16220f6cf2712073ccdc759ff3e1.gif",
            "https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif",
            "https://1.bp.blogspot.com/-WVysG3ES34o/WHQYX2VHIvI/AAAAAAAAtHE/Bt773uJfdnkRXUZL1DaVAbSkegdU2T-rgCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BDemi-chan%2Bwa%2BKataritai%2B-%2BEpisode%2B1%2B-%2BHikari%2BVampire%2BBites%2BYuki%2BSnow%2BWoman.gif"
    
    
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
                    .setDescription(`<@${message.author.id}> Mordeu <@${user.id}>`)
                    .setImage(mordidas[Math.floor(Math.random() * mordidas.length)])
                    .setFooter(`Clique no 🔁 para retribuir`)
                    .setColor(`RED`)
                message.channel.send(embed).then(async msg => {
    
                    await msg.react("🔁")
    
                    const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;
    
    
                    const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })
    
                    retribuirl.on('collect', r => {
                        const embedd = new Discord.MessageEmbed()
                            .setDescription(`<@${user.id}> Mordeu de volta <@${message.author.id}>`)
                            .setImage(mordidas[Math.floor(Math.random() * mordidas.length)])
                            .setFooter(`Eca parecem animais selvagens`)
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