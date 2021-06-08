const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
        msg.channel.send(`Membri nel server ${msg.guild.memberCount} \nnome server ${msg.guild.name}`); 
}