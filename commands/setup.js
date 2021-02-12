const Discord = require('discord.js')

module.exports = {
    info: {
      name: "setup",
      description: "setup",
      usage: "[setup]",
      aliases: ["setup", "start"],
    },

run: async function (client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Você não tem permissão")
        return;
    }
    
    const low = require("lowdb")
    const FileSync = require("lowdb/adapters/FileSync")
    const adapter = new FileSync("data.json")
    const db = low(adapter)

    if (!message.mentions.channels.first()) {
        message.channel.send("Mencione um canal")
        return;
    }
    let set1 = db.get('servers').find({ serverid: message.guild.id }).value()
    if (set1 == undefined){
        db.get('servers').push({
            serverid: message.guild.id,
            channel: 'undefined'
        }).write()
        db.get('servers').find({ serverid: message.guild.id }).assign({ channel: message.mentions.channels.first().id }).write()
        console.log(set1)
        message.channel.send(`${message.author} O canal de avisos foi definido como: ${message.mentions.channels.first()}`)
        return;
    }
    db.get('servers').find({ serverid: message.guild.id }).assign({ channel: message.mentions.channels.first().id }).write()
    console.log(set1)
    message.channel.send(`${message.author} O canal de avisos foi definido como: ${message.mentions.channels.first()}`)
}
}