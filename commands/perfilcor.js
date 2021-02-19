const Discord = require('discord.js')

module.exports = {
    info: {
      name: "perfilcor",
      description: "perfilcor",
      usage: "[perfilcor]",
      aliases: ["profilecolor"]
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        if (!args.length) return message.channel.send(`${message.author} Insira uma cor em ingles que esteja nessa lista: https://gist.githubusercontent.com/thomasbnt/b6f455e2c7d743b796917fa3c205f812/raw/80fad9ee8fc8db8f3c4fd973bb39a3be81974b37/Code%2520colors%2520for%2520Discord.js`)

        const cor = args.slice(0).join(' ')

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
        .assign({ cor: cor.toUpperCase() })
        .write()

        var p = "`"

        message.channel.send(`${message.author} Cor de seu perfil foi definido como ${cor}`)
    }
}