const Discord = require('discord.js')

module.exports = {
    info: {
      name: "fake",
      description: "fake",
      usage: "[fake]",
      aliases: []
    },
    run: async function (client, message, args) {
        if (!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send('Não tenho permissão para criar Webhook!')
        else {
          const user = message.mentions.users.first() || client.users.cache.get(args[0]);
          if (!user) return message.channel.send('Usuário não encontrado!');
    
          message.delete();
          
          let botmessage = args.slice(1).join(' ') //aqui pega a mensagem q vai ser enviada 
    
          let avatar = {avatar: user.avatarURL()} //aqui pega o avatar do membro
    
          if (!args[0]) return message.channel.send(`${message.author}, **Mencione um usuário !**`)  //caso o membro n mencione alguem 
    
          if (!args[1]) return message.channel.send(`${message.author}, **Diga algo !**`) //caso o membro n escreva algo
    
          message.channel.createWebhook(user.username, avatar).then(w => { //aqui vai definir o Webhook como "w"
            w.send(`${botmessage}`).then(() => w.delete()) //aqui vai enviar o Webhook e logo em seguida deletar ele 
          });
        }
    }
}