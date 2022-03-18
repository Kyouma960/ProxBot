const request = require('request');
const Discord = require('discord.js');
module.exports = {
	name: 'aquotes',
	description: 'aquote',
execute(client,message){
  
  
request.get({
  url: 'https://animechan.vercel.app/api/random',

}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));

  else {

var fixchar = JSON.parse(body).character
    
  fixchar=fixchar.split(" ");
  if (fixchar[1] && !fixchar[2]){
    fixchar=fixchar[1] +" "+fixchar[0];
  }
    else {
      fixchar=fixchar[0];
    }
    
    console.log(fixchar);
  
    request.get({
  url: 'https://api.jikan.moe/v4/characters?q='+fixchar+'&order_by=favorites&sort=desc',

}, function(error, response, body_2) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body_2.toString('utf8'));
else if (typeof JSON.parse(body_2).data[0]==="undefined"){
  
  
const embed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('**'+JSON.parse(body).character+' / '+JSON.parse(body).anime +'**')
   .setDescription('**'+JSON.parse(body).quote +'**');
  
     message.channel.send({ embeds: [embed] });
    
  return;
}
  else {

const embed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('**'+JSON.parse(body).character+' / '+JSON.parse(body).anime +'**')
   .setDescription('**'+JSON.parse(body).quote +'**')  .setImage(JSON.parse(body_2).data[0].images.jpg.image_url);
  
     message.channel.send({ embeds: [embed] });
    
  }
    });

      
  }
});

 
            }}




