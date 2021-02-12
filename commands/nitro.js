const Discord = require('discord.js')

module.exports = {
    info: {
      name: "nitro",
      description: "nitro",
      usage: "[nitro]",
      aliases: ["fakenitro"]
    },
    run: async function (client, message, args) {
        var nitro = "https://asunabot.ga/api/cdn/nitro.png"
        message.channel.send(`${message.author} 1`)
        message.channel.send(nitro)
    }
}