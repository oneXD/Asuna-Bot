const Discord = require('discord.js')

module.exports = {
    info: {
      name: "explodir",
      description: "explodir",
      usage: "[explodir]",
      aliases: ["explosão", "explosion", "explode"],
    },

run: async function (client, message, args) {
    let explosao = [
        "https://static.wikia.nocookie.net/bokunoheroacademia/images/7/72/G-Sm6d0qIwQxUGHIp-m2WEV9hI-L6ZNa1B97GizhpoIhCYEcFki3iFy5-dXvSUyzMoTQ3XLwQAF0vJzNSZ1AYMY1xojNZjvuOOh3IfPNzt0cBK4CY4TsxYo4Ct8dY-rj.gif/revision/latest/top-crop/width/360/height/450?cb=20190501170330&path-prefix=pt-br",
        "https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif",
        "https://4.bp.blogspot.com/-C082mMUeTCU/VrNVgp7t1XI/AAAAAAAAAgM/JzfY1CPtyFo/s1600/ezgif.com-video-to-gif%2B%25282%2529.gif",
        "https://static.myfigurecollection.net/upload/pictures/2020/08/03/2487948.gif"

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
                .setDescription(`<@${message.author.id}> Explodiu <@${user.id}>`)
                .setImage(explosao[Math.floor(Math.random() * explosao.length)])
                .setFooter(`Clique no 🔁 para retribuir`)
                .setColor(`PURPLE`)
            message.channel.send(embed).then(async msg => {

                await msg.react("🔁")

                const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;


                const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })

                retribuirl.on('collect', r => {
                    const embedd = new Discord.MessageEmbed()
                        .setDescription(`<@${user.id}> Explodiu <@${message.author.id}>`)
                        .setImage(explosao[Math.floor(Math.random() * explosao.length)])
                        .setFooter(`Ai que dor`)
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