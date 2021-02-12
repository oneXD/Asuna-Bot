const Discord = require('discord.js')

module.exports = {
    info: {
      name: "dormir",
      description: "dormir",
      usage: "[dormir]",
      aliases: ["sleep", "cama", "bed"]
    },
    run: async function (client, message, args) {
        let kisses = [
            "https://i.pinimg.com/originals/93/89/2a/93892ab589aaf97dcbfbc887a6c065df.gif",
            "https://media1.tenor.com/images/d599b5c2904739a35fbbf7ad30c506c5/tenor.gif?itemid=12015553",
            "https://data.whicdn.com/images/99494062/original.gif",
            "https://cdn130.picsart.com/291265109001201.gif?to=min&r=640"
    
    
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
                    .setDescription(`<@${message.author.id}> Chamou <@${user.id}> para cama`)
                    .setImage(kisses[Math.floor(Math.random() * kisses.length)])
                    .setFooter(`Clique no 🔁 para retribuir`)
                    .setColor(`RED`)
                message.channel.send(embed).then(async msg => {
    
                    await msg.react("🔁")
    
                    const retribuir = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;
    
    
                    const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })
    
                    retribuirl.on('collect', r => {
                        const embedd = new Discord.MessageEmbed()
                            .setDescription(`<@${user.id}> Aceitou ir pra cama com <@${message.author.id}> isso vai dar em alguma coisa ein <:hmm:782056369759060019>`)
                            .setImage(kisses[Math.floor(Math.random() * kisses.length)])
                            .setFooter(`Dormiram juntos`)
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