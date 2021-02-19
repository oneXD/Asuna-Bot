const Discord = require('discord.js')

module.exports = {
    info: {
        name: "perfilimagem",
        description: "perfilimagem",
        usage: "[perfilimagem]",
        aliases: ["profileimage"]
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        if (!args.length) return message.channel.send("Insira um link de imagem")

        const check = db
        .get('users')
        .find({ memberid: message.author.id })
        .value()

        if (check == undefined || check == "undefined") {
            db.get('users').push({
                memberid: message.author.id,
            }).write()
        }

        const saveimage = args[0]

        if (!saveimage.startsWith('http')) return message.channel.send("Você precisa inserir o link de uma imagem")
        if (!message.content.includes(".")) return message.channel.send("Você precisa inserir o link de uma imagem")
        if (message.content.includes("https://.")) return message.channel.send("Você precisa inserir o link de uma imagem")
        if (message.content.includes("http://.")) return message.channel.send("Você precisa inserir o link de uma imagem")

        db
        .get('users')
        .find({ memberid: message.author.id })
        .assign({ imagem: saveimage })
        .write()

        message.channel.send(`${message.author} Imagem definida como ${saveimage}`)
    }
      
}