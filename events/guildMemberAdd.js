module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Xoş Gəlifsən qaqa **' + username + '**!');
    member.guild.defaultChannel.send('xg '+username+'');
};
