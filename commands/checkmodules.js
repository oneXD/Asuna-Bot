const Discord = require('discord.js')

module.exports = {
    info: {
      name: "checkmodules",
      description: "checkmodules",
      usage: "checkmodules",
      aliases: []
    },

    run: async function (client, message, args) {
        const m = await message.channel.send('ping?');
  
    m.edit(`💻 **| Modulo Comum**\nLatência do Server: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
        client.ws.ping
      )}ms**`
    );
    }
}