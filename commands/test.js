const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {

  let user = message.guild.members.cache.random();
  console.log(user.user);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: 'Ask the bot who is gay',
  usage: 'test'
};