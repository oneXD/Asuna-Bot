const Discord = require('discord.js')

module.exports = {
    info: {
      name: "sobremim",
      description: "sobremim",
      usage: "[sobremim]",
      aliases: ["about", "aboutme", "sobre"]
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        if (!args.length) return message.channel.send(`${message.author} Insira Um texto`)

        const sobre = args.slice(0).join(' ')

        const check = db
        .get('users')
        .find({ memberid: message.author.id })
        .value()

        if (check == undefined || check == "undefined") {
            db.get('users').push({
                memberid: message.author.id,
            }).write()
        }

        db
        .get('users')
        .find({ memberid: message.author.id })
        .assign({ sobremim: sobre })
        .write()

        var p = "`"

        message.channel.send(`
        ${message.author} Sobre mim definido como:
        
        ${p}${p}${p}
${sobre}
        ${p}${p}${p}

        `)

    }
}