const Discord = require('discord.js')

module.exports = {
    info: {
      name: "morse",
      description: "morse",
      usage: "[morse]",
      aliases: []
    },
    run: async function (client, message, args) {
        message.delete();
        ''
        let botmessage = args.slice(0).join(' ') //aqui pega a mensagem q vai ser enviada
  
        //aqui faz o processamento para morse
  
        var res = botmessage.toLowerCase().replace(/a/g, ".-");
        var res = res.replace(/b/g, "-...");
        var res = res.replace(/c/g, "-.-.");
        var res = res.replace(/d/g, "-..");
        var res = res.replace(/e/g, ".");
        var res = res.replace(/f/g, "..-.");
        var res = res.replace(/g/g, "--.");
        var res = res.replace(/h/g, "....");
        var res = res.replace(/i/g, "..");
        var res = res.replace(/j/g, ".---");
        var res = res.replace(/k/g, "-.-");
        var res = res.replace(/l/g, ".-..");
        var res = res.replace(/m/g, "--");
        var res = res.replace(/n/g, "-.");
        var res = res.replace(/o/g, "---");
        var res = res.replace(/p/g, ".--.");
        var res = res.replace(/q/g, "--.-");
        var res = res.replace(/r/g, ".-.");
        var res = res.replace(/s/g, "...");
        var res = res.replace(/t/g, "-");
        var res = res.replace(/u/g, "..-");
        var res = res.replace(/v/g, "...-");
        var res = res.replace(/w/g, ".--");
        var res = res.replace(/x/g, "-..-");
        var res = res.replace(/y/g, "-.--");
        var res = res.replace(/z/g, "--..");
        var res = res.replace(/1/g, ".----");
        var res = res.replace(/2/g, "..---");
        var res = res.replace(/3/g, "...--");
        var res = res.replace(/4/g, "....-");
        var res = res.replace(/5/g, ".....");
        var res = res.replace(/6/g, "-....");
        var res = res.replace(/7/g, "--...");
        var res = res.replace(/8/g, "---..");
        var res = res.replace(/9/g, "----.");
        var res = res.replace(/0/g, "-----");
        var res = res.replace(/ /g, "/");
  
  var i = "`"
  
  let embed = new Discord.MessageEmbed()
              .setTitle("🤖Bip bip bop")
              .setColor("RANDOM")
              .setDescription(`${i}${res}${i}`)
          message.channel.send(embed)
    }
}