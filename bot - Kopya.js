const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot ${client.user.tag}Gəldi!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
if (!msg.content.startsWith(prefix)) {
  return;
}
if (msg.content.toLowerCase() === prefix + 'salam') {
  msg.reply('əlqasımın oğlanlarına salam');
  }
if (msg.content.toLowerCase() === prefix + 'necesen') {
  msg.reply('əlqasım oğlanları həmişə yaxşı olur');
   }
if (msg.content.toLowerCase() === prefix + 'got') {
  msg.reply('sənsən göt');
   }
if (msg.content.toLowerCase() === prefix + 'sen 2 defe gotsen') {
  msg.reply('səndə 3 dəfə götsən');
   }
if (msg.content.toLowerCase() === prefix + 'famil nece oglandı') {
  msg.reply('çox ograş gədədi');
     }
if (msg.content.toLowerCase() === prefix + 'ozunsen got') {
  msg.reply('əlim dəmirdə');
  }
if (msg.content.toLowerCase() === prefix + 'ozunsen') {
  msg.reply('əlim dəmirdə');
  }
if (msg.content.toLowerCase() === prefix + 'gelen var?') {
  msg.reply('söhbətə?');
  }
if (msg.content.toLowerCase() === prefix + 'sikdir') {
  msg.reply('əyib olsun');
  }
if (msg.content.toLowerCase() === prefix + 'rafael nece oglandı') {
  msg.reply('qızıldı qızıl');
    }
if (msg.content.toLowerCase() === prefix + 'orxan nece oglandı') {
  msg.reply('"m4 kimi tapılmayan oğlandı"');
      }
if (msg.content.toLowerCase() === prefix + 'pox') {
  msg.reply('"ağzına"');
        }
if (msg.content.toLowerCase() === prefix + '<baku') {
  msg.reply('afrikada hava zordu');
}
});

client.login(ayarlar.token);
