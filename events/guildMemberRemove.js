module.exports = member => {
  let guild = member.guild;
  member.send('hara getdin?');
  guild.defaultChannel.sendMessage(`${member.user.username} getdi.`);
};
