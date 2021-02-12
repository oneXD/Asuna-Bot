require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

//Importação da DATABASE local [data.json]
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const adapter = new FileSync("data.json")
const db = low(adapter)

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.options.http.host = "https://discord.com"


client.config = {
  prefix: process.env.PREFIX
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});

//Logging in to discord
client.login(process.env.TOKEN)
