const Discord = require('discord.js')

module.exports = {
    info: {
      name: "carinho",
      description: "carinho",
      usage: "[carinho]",
      aliases: ["pat", "headpat"],
    },

run: async function (client, message, args) {
    let carinho = [
        "https://media.tenor.com/images/7cdb415873e24292b11ab31a339dd552/tenor.gif",
        "https://media.tenor.com/images/dc61bf036b96b9a321943493c55ad8a4/tenor.gif",
        "https://media.tenor.com/images/374a3ed006e9dd52a874e40a459a9cae/tenor.gif",
        "https://media.tenor.com/images/943a52d38d896bda734a6396b1ffca89/tenor.gif",
        "https://media.tenor.com/images/fb3d47da964bd177d12a37488474a65f/tenor.gif",
        "https://media.tenor.com/images/37e36267891a33899bb2d88232f9f637/tenor.gif",
        "https://media.tenor.com/images/50b500c0fc0ad01a974af8b58b5e0c9b/tenor.gif",
        "https://media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif"

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
                .setDescription(`<@${message.author.id}> fez um carinho em <@${user.id}>`)
                .setImage(carinho[Math.floor(Math.random() * carinho.length)])
                .setFooter(`Clique no 🔁 para retribuir`)
                .setColor(`PURPLE`)
            message.channel.send(embed).then(async msg => {

                await msg.react("🔁")

                const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;


                const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })

                retribuirl.on('collect', r => {
                    const embedd = new Discord.MessageEmbed()
                        .setDescription(`<@${user.id}> fez um carinho de volta em <@${message.author.id}>`)
                        .setImage(carinho[Math.floor(Math.random() * carinho.length)])
                        .setFooter(`Ain que fofinho`)
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