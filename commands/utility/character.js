const request = require('request');
const Discord = require('discord.js');
module.exports = {
	name: 'char',
	description: 'character',
execute(client,message,args){


   if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);
  var character=args.join(' ')
    request.get({
  url: 'https://api.jikan.moe/v4/characters?q='+character+'&order_by=favorites&sort=desc',

}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body_2.toString('utf8'));
    else if(typeof  JSON.parse(body).data[0]==="undefined" ) return message.channel.send("This character doesn't exist!!");
else {  
const embed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('**'+JSON.parse(body).data[0].name+'**')
   .setDescription('**'+JSON.parse(body).data[0].about +'**')  .setImage(JSON.parse(body).data[0].images.jpg.image_url);
  
     message.channel.send({ embeds: [embed] });
}
    });
}
}
    