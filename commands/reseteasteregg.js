const Discord = require('discord.js')

module.exports = {
    info: {
      name: "reseteasteregg",
      description: "reseteasteregg",
      usage: "[reseteasteregg]",
      aliases: ["kiritoreset"]
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)
    
        let easteregg = db
        .get('servers')
        .find({ serverid: message.guild.id })
    
        if (easteregg.value().easteregg == false) {
            return
        }
    
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send(`${message.author}\n\nVocê não tem permissão para isso!`)
            return;
        }
    
        easteregg.assign({ easteregg: false }).write()

    }
}