const Discord = require('discord.js')

const pedido = [
    "https://asunabot.ga/api/cdn/casamento1.gif",
    "https://asunabot.ga/api/cdn/casamento2.gif"

]

const aceito = [
    "https://asunabot.ga/api/cdn/casamento3.gif",
    "https://asunabot.ga/api/cdn/casamento4.gif"
]

const nego = [
    "https://asunabot.ga/api/cdn/casamento5.gif",
    "https://asunabot.ga/api/cdn/casamento6.gif"
]

module.exports = {
    info: {
      name: "casar",
      description: "casar",
      usage: "[casar]",
      aliases: ["marry"]
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        let membertable = db.get('users').find({ memberid: message.author.id }).value()
        if (membertable == undefined){
            db.get('users').push({
                memberid: message.author.id,
                marry: false,
                marryid: "undefined"
            }).write()
        }

        let marrystats = db
        .get("users")
        .find({ memberid: message.author.id })
        .value()
        .marry

        let marryid = db
        .get("users")
        .find({ memberid: message.author.id })
        .value()
        .marryid

        if (!message.mentions.members.first()) {
            if (marrystats === false || marrystats === undefined) {
                message.channel.send(`${message.author} Você não é casado`)
                return
            }
            message.channel.send(`${message.author} Você é casado com <@${marryid}>`)
            return
        }
        
        var memid = message.mentions.members.first().id

        let membertable2 = db.get('users').find({ memberid: memid }).value()
        if (membertable2 == undefined){
            db.get('users').push({
                memberid: memid,
                marry: false,
                marryid: "undefined"
            }).write()
        }

        if (db.get('users').find({ memberid: memid}).value().marry == true) return message.channel.send(`${message.author} Essa pessoa já é casada`)

        if (marrystats == true) return message.channel.send(`${message.author} Você já é casado com <@${marryid}>`)

        let marrystats2 = db
        .get("users")
        .find({ memberid: memid })
        .value()
        .marry

        let marryid2 = db
        .get("users")
        .find({ memberid: memid })
        .value()
        .marryid

        if (marrystats2 == true) return message.channel.send(`${memid} Você já é casado com <@${marryid2}>`)

        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        const auth = message.author.tag
        const auth2 = message.mentions.users.first().username

        let embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> Pediu <@${user.id}> em casamento será que vai aceitar`)
        .setImage(pedido[Math.floor(Math.random() * pedido.length)])
        .setFooter(`Clique no ✅ para aceitar e no ❌ para negar`)
        .setColor(`RED`)
    message.channel.send(embed).then(async msg => {

        await msg.react("✅")

        await msg.react("❌")

        const retribuir = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === user.id;

        const negar = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === user.id;

        const retribuirl = msg.createReactionCollector(retribuir, { max: 1 })

        const negarl = msg.createReactionCollector(negar, { max: 1 })

        retribuirl.on('collect', r => {
            const embedd = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> Se casou com <@${user.id}>`)
                .setImage(aceito[Math.floor(Math.random() * aceito.length)])
                .setFooter(`PARABENS PRO CASALZINHO 💖`)
                .setColor(`RED`)
            message.channel.send(embedd)
            db
            .get('users')
            .find({ memberid: message.author.id })
            .assign({
                marry: true,
                marryid: `${message.mentions.members.first().id}`
            }).write()
            console.log('casado')

            db
            .get('users')
            .find({ memberid: memid })
            .assign({
                marry: true,
                marryid: `${message.author.id}`
            }).write()
        
        })

        negarl.on('collect', r => {
            const embedd = new Discord.MessageEmbed()
                .setDescription(`<@${user.id}> Deu um fora em <@${message.author.id}>`)
                .setImage(nego[Math.floor(Math.random() * nego.length)])
                .setFooter(`Triste mais é a vida`)
                .setColor("BLACK")
            message.channel.send(embedd)
        
        })
        

    })

    }
}