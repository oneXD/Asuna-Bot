const Discord = require('discord.js')
const { write } = require('lowdb/adapters/FileSync')

const sepa = [
    "https://asunabot.ga/api/cdn/divorcio1.gif",
    "https://asunabot.ga/api/cdn/divorcio2.gif"
]

module.exports = {
    info: {
      name: "divorciar",
      description: "divorciar",
      usage: "[divorciar]",
      aliases: ["divorce", "separar"]
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        let msgmember = db
        .get('users')
        .find({ memberid: message.author.id })

        let msgmemberm = db
        .get('users')
        .find({ memberid: message.author.id })
        .value()
        .marry

        if (msgmemberm == false || msgmemberm == undefined || msgmemberm == undefined) return message.channel.send(`${message.author} Você não é casado`)

        let msgmembercouple = db
        .get('users')
        .find({ memberid: msgmember.value().marryid })

    let embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> Pediu divorcio de <@${msgmember.value().marryid}>`)
        .setImage(sepa[Math.floor(Math.random() * sepa.length)])
        .setFooter(`A vida é triste`)
        .setColor(`BLACK`)
    message.channel.send(embed)

    msgmember.assign({
        marry: false,
        marryid: "undefined"
    }).write()
    msgmembercouple.assign({
        marry: false,
        marryid: "undefined"
    }).write()



    }
}