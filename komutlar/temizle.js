const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
    return message.author.send('`mesaji sil` əmiri sadəcə serverlərda işlədə bilər');
  }
  let mesajsayisi = parseInt(args.join(''));
  if (mesajsayisi.length < 1) return message.channel.send('neçə mesaj silim qaqa')
  if (mesajsayisi > 100) return message.channel.send('100-dən çox mesaj silə bilmərəm brat!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' dənə mesaj sildim qaqa')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'mesaji sil',
  description: 'Yazılan qədər mesajı silər.',
  usage: 'mesaji sil <silinəcək mesaj sayı>'
};
