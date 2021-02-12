const Discord = require('discord.js');
const Canvas = require('canvas');
const { registerFont } = require('canvas');
registerFont('./data/impact.ttf', { family: 'impact' });

module.exports = {
    info: {
      name: "gatodrogado",
      description: "gatodrogado",
      usage: "[gatodrogado]",
      aliases: ["drugcat", "drugs"]
    },
    run: async function (client, message, args) {
        if (args.length > 0) {

            const canvas = Canvas.createCanvas(1920, 1080)
            const ctx = canvas.getContext('2d');
        
            const background = await Canvas.loadImage('./commands/images/tenor.gif')
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height)
        
            // Select the font size and type from one of the natively available fonts
            ctx.font = '120px impact';
            // Select the style that will be used to fill the text in
            ctx.fillStyle = '#ffffff';
            // Actually fill the text with a solid color
        
            var str = args.slice(0).join(' ').toString()
            var str2 = str.replace(/!/g, "\n")
            var str3 = str2.match(/.{1,16}/g);
            var str4 = str3.join("\n")
        
            console.log(str4)
        
            ctx.fillText(`${str4}`, canvas.width / 5.5, canvas.height / 10.8);
        
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
        
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        
            message.channel.send(message.author, attachment);
        
        }
            else {
                message.channel.send(`${message.author} Insira um texto para o meme, use ! para usar a linha de baixo do meme`)
                return;
            }
    }
}