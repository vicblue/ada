const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'armadilloliberate') {
    msg.reply('Passcode is fully redeemed.');
  }
});


client.on('message', msg => {
  if (msg.content === '80jdfitmar') {
    msg.reply('Old passcode - available.');
  }
});

client.login(auth.token);
