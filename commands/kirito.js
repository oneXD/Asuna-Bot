const Discord = require('discord.js')

module.exports = {
    info: {
        name: "kirito",
        description: "kirito",
        usage: "[kirito]",
        aliases: ["easteregg"]
    },
    run: async function (client, message, args) {
        if (!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send('Não tenho permissão para criar Webhook!')

        //IMPORTANDO A DATABASE
        const low = require("lowdb")
        const FileSync = require("lowdb/adapters/FileSync")
        const adapter = new FileSync("data.json")
        const db = low(adapter)

        let set1 = db.get('servers').find({ serverid: message.guild.id }).value()
        if (set1 == undefined){
            db.get('servers').push({
                serverid: message.guild.id,
                channel: 'undefined'
            }).write()
        }
    
        let easteregg = db
        .get('servers')
        .find({ serverid: message.guild.id })
    
        if (easteregg.value().easteregg == true) {
            return
        }
    
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send(`${message.author}\n\nVocê não tem permissão para isso!`)
            return;
        }
    
        easteregg.assign({ easteregg: true }).write()
    
        let avatar = {avatar: 'https://asunabot.ga/api/cdn/kirito.webp'}
        let avatar2 = {avatar: 'https://asunabot.ga/api/cdn/asuna.webp'}
    
        function Kirito(msg) {
            message.channel.createWebhook('Kirito', avatar).then(w => { //aqui vai definir o Webhook como "w"
                w.send(msg).then(() => w.delete()) //aqui vai enviar o Webhook e logo em seguida deletar ele 
            });
        }
          function Asuna(msg) {
            message.channel.createWebhook('Asuna', avatar2).then(w => { //aqui vai definir o Webhook como "w"
            w.send(msg).then(() => w.delete()) //aqui vai enviar o Webhook e logo em seguida deletar ele 
        });
          }
    
          setTimeout(Asuna, 3000, 'KIRITOOOO!!');
          
          setTimeout(Kirito, 5000, 'A... Asuna');
    
          let embed = new Discord.MessageEmbed()
            .setImage('https://i.pinimg.com/originals/32/93/a2/3293a2e3b52568aa995f67edf5f8fe8e.gif')
    
          setTimeout(Asuna, 7000, embed)
    
          setTimeout(Asuna, 8000, 'Finalmente te encontrei...')
    
          setTimeout(Asuna, 12000, 'Parece que dessa vez quem estava em perigo era você')
    
          setTimeout(Kirito, 14000, 'Bom... Talvez')
    
          let embed2 = new Discord.MessageEmbed()
          .setImage('https://i.pinimg.com/originals/17/1b/1e/171b1ea1eaf89980a6ef6a805e19c5b1.gif')
    
          setTimeout(Kirito, 17000, embed2)
        
    
    
          
    
        
    
    
    }
}
