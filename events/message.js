const config = require(`../Configuration/config.json`); 
const Discord = require(`discord.js`); 
module.exports = async msg => { 
if(!msg.content.startsWith(config.prefix)) return; 
if(msg.author.bot) return; 
const bot = msg.client; 
const args = msg.content.split(` `); 
const command = args.shift().slice(config.prefix.length); 
let cmdFile = require(`../Commands/${command}`); 
console.log(`[command-execute] Il comando ${command} e' stato eseguito da ${msg.author.tag} nel server di ${msg.guild.name}`) 
if (!cmdFile) { 
return; 
} 
if (cmdFile) { 
cmdFile(bot, msg, args).catch(err => { 
const error = new Discord.RichEmbed() 
.setTitle(command) 
.setDescription(`Si è verificato un errore con il bot!`) 
.addField(`Questo è l'errore`, "```" + err + "```", false) 
.setFooter(`Contatta l'Amministratore`) 
.setColor(0xf45c42) 
msg.channel.send(error) 
console.error(`L'esecuzione di ` + command + `in ` + msg.guild.name + `, ha avuto questo errore: ` + err) 
});    
} 
}; 
