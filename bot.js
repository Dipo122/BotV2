//File creato con il Programma Bot Discord source Creator by Scary Tiger. Non cancellare questa stringa per evitare malfunzionamenti di altri programmi. 
const Discord = require("discord.js"); 
const bot = new Discord.Client(); 
const config = require("./Configuration/config.json"); 
const { isNull } = require("util"); 
const fs = require("fs"); 
bot.login(config.token); 
require("./util/eventLoader.js")(bot); 
bot.on("ready", function() { 
console.log(`IL BOT E' PRONTO!`) 
}); 
