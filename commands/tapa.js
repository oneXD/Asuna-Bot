const Discord = require('discord.js')

module.exports = {
    info: {
      name: "tapa",
      description: "tapa",
      usage: "[tapa]",
      aliases: ["slaap"]
    },
    run: async function (client, message, args) {
        let tapas = [
            "https://media.tenor.com/images/c14ee746377c8d3b102b086fa21b9aa3/tenor.gif",
            "https://media.tenor.com/images/3ee6c279dd97a1e97409a54dd90a1972/tenor.gif",
            "https://media.tenor.com/images/52f290cc5e4d1d6672f80e1b479a895f/tenor.gif",
            "https://media.tenor.com/images/1cf565212575201942e3202d9a58227c/tenor.gif",
            "https://media.tenor.com/images/f938068f62bdc04eaa0db516f346aa91/tenor.gif",
            "https://media.tenor.com/images/25ddd61a653f354f37e8570ce1131c52/tenor.gif",
            "https://media.tenor.com/images/4fd6c3c17bf614da5ab13c3e8c10c0fd/tenor.gif",
    
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
                    .setDescription(`<@${message.author.id}> Deu um tapa em <@${user.id}>`)
                    .setImage(tapas[Math.floor(Math.random() * tapas.length)])
                    .setFooter(`Clique no 🔁 para retribuir`)
                    .setColor(`RED`)
                message.channel.send(embed).then(async msg => {
    
                    await msg.react("🔁")
    
                    const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;
    
    
                    const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })
    
                    retribuirl.on('collect', r => {
                        const embedd = new Discord.MessageEmbed()
                            .setDescription(`<@${user.id}> Deu um tapa em <@${message.author.id}>`)
                            .setImage(tapas[Math.floor(Math.random() * tapas.length)])
                            .setFooter(`BRIGA, BRIGA, BRIGA!`)
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