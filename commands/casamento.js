const Discord = require('discord.js')
const { stat } = require('fs')
const { get } = require('http')

module.exports = {
    info: {
      name: "casamento",
      description: "casamento",
      usage: "[casamento]",
      aliases: []
    },
    run: async function (client, message, args) {
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        if (!message.mentions.members.first()) {

            let membertable2 = db.get('users').find({ memberid: message.author.id }).value()
            if (membertable2 == undefined){
                db.get('users').push({
                    memberid: message.author.id,
                    marry: false,
                    marryid: "undefined"
                }).write()
            }

            let mestate = db
            .get('users')
            .find({ memberid: message.author.id })
            .value()
            .marry

            if (mestate == false || mestate === undefined || mestate == "undefined") {
                message.channel.send(`${message.author} Você não é casado`)
                return
            }

            let mecouple = db
            .get('users')
            .find({ memberid: message.author.id })
            .value()
            .marryid

            message.channel.send(`${message.author} Você é casado com <@${mecouple}>`)
            return
            
        }

        let membertable = db.get('users').find({ memberid: message.mentions.members.first().id }).value()
        if (membertable == undefined){
            db.get('users').push({
                memberid: message.mentions.members.first().id,
                marry: false,
                marryid: "undefined"
            }).write()
        }

        let state = db
        .get('users')
        .find({ memberid: message.mentions.members.first().id })
        .value()
        .marry

        if (state == false || state === undefined) {
            message.channel.send(`${message.author} Essa pessoa não é casada`)
            return
        }
        let person = db
        .get('users')
        .find({ memberid: message.mentions.members.first().id })
        .value()
        .marryid

        message.channel.send(`${message.author} Essa pessoa é casada com <@${person}>`)


    }
}