const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komandalar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ilə giriş olundu!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}kömək + ${client.guilds.size} server + ${client.users.size} istifadəci`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi düzəliş edildi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Bu dəqiqə ` + client.channels.size + ` ədət kanala, ` + client.guilds.size + ` ədət serverə və ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` istifadəciyə xidmət edir!`);
};
