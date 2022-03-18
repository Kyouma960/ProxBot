const Discord = require('discord.js');
module.exports = {
	name: 'sendnudes',
	description: 'This sends nudes',
  execute(client , message){
    a = Math.random()*2;
    if(a>1){
    const embed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Get some good nudes')
    .setImage('https://ichef.bbci.co.uk/news/464/mcs/media/images/55189000/jpg/_55189118_1ab0dfef-adae-4547-9016-645e5f62a8db.jpg')
    .setFooter('JOIN OUR SERVER USING pro discord command');
   
     message.channel.send({ embeds: [embed] });
  
  }
  else
  {
    const embed2 = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Get some good nudes')
    .setImage('https://thumbs.gfycat.com/DenseBoilingBlackandtancoonhound-size_restricted.gif')
    .setFooter('JOIN OUR SERVER USING pro discord command');
   
     message.channel.send({ embeds: [embed2] });
  }
}
}
    
   








   
  