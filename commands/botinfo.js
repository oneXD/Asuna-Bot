const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')


module.exports = {
    info: {
      name: "botinfo",
      description: "botinfo",
      usage: "[botinfo]",
      aliases: ["infobot", "bot", "info"],
    },

run: async function (client, message, args) {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.cache.size
    const usersize = client.users.cache.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = ` ${days.toFixed()} dias\n ${hours.toFixed()} horas\n ${minutes.toFixed()} minutos\n ${seconds.toFixed()} segundos`;
  


    const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setThumbnail(botAvatar)
      .setAuthor(' 💻 Minhas informações 💻 ')
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Servidores**', `🛡 ${servsize}`, true)
      .addField('**Usuários**', `${usersize}`, inline)
      .addField('**Estou online a**', `${uptime}`  )
      .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('**Criador**', "${Zero.Zero.One}#0002")
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()
if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
    
    }
