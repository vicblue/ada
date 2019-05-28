const Discord = require('discord.js');
const client = new Discord.Client();
//const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toUpperCase() === "ping"..toUpperCase()) {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content.toUpperCase() === "armadilloliberate".toUpperCase()) {
    msg.reply('Passcode is fully redeemed.');
  }
});


client.on('message', msg => {
  if (msg.content.toUpperCase() === "80jdfitmar".toUpperCase()) {
    msg.reply('Old passcode - available.');
  }
});

// client.login(auth.token);
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
