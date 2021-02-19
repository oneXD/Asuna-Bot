const Discord = require('discord.js')
const Client = new Discord.Client()
const p = "`"

module.exports = {
    info: {
      name: "perfil",
      description: "perfil",
      usage: "[perfil]",
      aliases: ["profile"]
    },

    run: async function (client, message, args) {
        if (message.mentions.members.first()) {
            const low = require("lowdb")
            const FileSync = require("lowdb/adapters/FileSync")
            const adapter = new FileSync("data.json")
            const db = low(adapter)

            const dev = client.users.cache.get(message.mentions.members.first().id)

            sobremim = db
            .get('users')
            .find({ memberid: dev.id })
            .value()

            if (sobremim == undefined || sobremim == false || sobremim == "undefined") {
                db.get('users').push({
                    memberid: dev.id,
                }).write()

                db
                .get('users')
                .find({ memberid: dev.id })
                .assign({
                    sobremim: "Esse é um texto que fala sobre você, altere isso com o comando 'sobremim, altere a cor com o comando 'perfilcor e adicione uma imagem personalizada com 'perfilimagem"
                }).write()
                sobremim = db
                .get('users')
                .find({ memberid: dev.id })
                .value()
                .sobremim
            }

            sobremim = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .sobremim

            if (sobremim == undefined || sobremim == false || sobremim == "undefined") {
                db
                .get('users')
                .find({ memberid: dev.id })
                .assign({
                    sobremim: "Esse é um texto que fala sobre você, altere isso com o comando 'sobremim, altere a cor com o comando 'perfilcor e adicione uma imagem personalizada com 'perfilimagem"
                }).write()
                sobremim = db
                .get('users')
                .find({ memberid: dev.id })
                .value()
                .sobremim

            }

            let cor = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .cor

            let imagem = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .imagem

            if (!imagem == undefined || imagem == "undefined"){
            let imagem2 = imagem.toString()
            if (!imagem2.startsWith('http')) {
                imagem = undefined
            }
            }
            
            let avatar = dev.avatarURL()

            let casado = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .marry

            console.log(casado)

            if (casado == true) {
                var casadostatus = "Sim"
            }
            if (casado == false || casado == undefined) {
                var casadostatus = "Não"
            }

            let embed = new Discord.MessageEmbed()
            .setTitle(`Perfil de ${dev.username}`)
            .setDescription(`

            Nome: ${p}${dev.username}${p}ﾠCasado: ${p}${casadostatus}${p}

            Tag: ${p}${dev.tag}${p}ﾠ
            
            ID: ${p}${dev.id}${p}

            Sobre Mim:

            ${p}${p}${p}
${sobremim}
            ${p}${p}${p}
            
            `)
            .setColor(cor)
            .setImage(imagem)
            .setThumbnail(avatar)
            message.channel.send(embed)

            
        }
        else {
            const low = require("lowdb")
            const FileSync = require("lowdb/adapters/FileSync")
            const adapter = new FileSync("data.json")
            const db = low(adapter)

            const dev = message.author

            sobremim = db
            .get('users')
            .find({ memberid: dev.id })
            .value()

            if (sobremim == undefined || sobremim == false || sobremim == "undefined") {
                db.get('users').push({
                    memberid: dev.id,
                }).write()

                db
                .get('users')
                .find({ memberid: dev.id })
                .assign({
                    sobremim: "Esse é um texto que fala sobre você, altere isso com o comando 'sobremim, altere a cor com o comando 'perfilcor e adicione uma imagem personalizada com 'perfilimagem"
                }).write()
                sobremim = db
                .get('users')
                .find({ memberid: dev.id })
                .value()
                .sobremim
            }

            sobremim = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .sobremim

            if (sobremim == undefined || sobremim == false || sobremim == "undefined") {
                db
                .get('users')
                .find({ memberid: dev.id })
                .assign({
                    sobremim: "Esse é um texto que fala sobre você, altere isso com o comando 'sobremim, altere a cor com o comando 'perfilcor e adicione uma imagem personalizada com 'perfilimagem"
                }).write()
                sobremim = db
                .get('users')
                .find({ memberid: dev.id })
                .value()
                .sobremim

            }

            let cor = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .cor

            let imagem = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .imagem

            if (!imagem == undefined || imagem == "undefined"){
            let imagem2 = imagem.toString()
            if (!imagem2.startsWith('http')) {
                imagem = undefined
            }
            }
            
            let avatar = dev.avatarURL()

            let casado = db
            .get('users')
            .find({ memberid: dev.id })
            .value()
            .marry

            console.log(casado)

            if (casado == true) {
                var casadostatus = "Sim"
            }
            if (casado == false || casado == undefined) {
                var casadostatus = "Não"
            }

            
            let embed = new Discord.MessageEmbed()
            .setTitle(`Perfil de ${dev.username}`)
            .setDescription(`

            Nome: ${p}${dev.username}${p}ﾠCasado: ${p}${casadostatus}${p}

            Tag: ${p}${dev.tag}${p}ﾠ
            
            ID: ${p}${dev.id}${p}

            Sobre Mim:

            ${p}${p}${p}
${sobremim}
            ${p}${p}${p}
            
            `)
            .setColor(cor)
            .setImage(imagem)
            .setThumbnail(avatar)
            message.channel.send(embed)

        }
    }

}