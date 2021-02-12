module.exports = async (client, guild) => {
    //Importação da DATABASE local [data.json]
    const low = require("lowdb")
    const FileSync = require("lowdb/adapters/FileSync")
    const adapter = new FileSync("data.json")
    const db = low(adapter)
    client.on('guildCreate', (guild) => {
        db.get('servers').push({
            serverid: guild.id,
            channel: 'undefined'
        }).write()
    })
}