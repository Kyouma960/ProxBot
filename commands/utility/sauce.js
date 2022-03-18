const request = require('request');
const { Client, Intents } = require('discord.js');

module.exports = {
	name: 'sauce',
	description: 'finds source of the pic',
execute(client,message, args){
var testmode = 1
var numres = 1


if (typeof message.attachments.first()!=="undefined"){ var urlval = message.attachments.first().url;}

else return;
 
request.get({
  url: 'https://saucenao.com/search.php?db=999&output_type=2&testmode='+ testmode +'&numres='+numres+'&url='+ urlval +'&api_key='+ process.env.saucenao,

}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));

  else {

  if(typeof JSON.parse(body).results[0].header.thumbnail !== "undefined"){  
  var thumbnail = JSON.parse(body).results[0].header.thumbnail
   message.channel.send(thumbnail);
  }

  if(typeof JSON.parse(body).results[0].data.source !== "undefined"){
  var source = JSON.parse(body).results[0].data.source
  message.channel.send(source);
  }

  if(typeof JSON.parse(body).results[0].data.ext_urls !== "undefined"){
  var ext_url = JSON.parse(body).results[0].data.ext_urls[0]
  message.channel.send(ext_url);
  }
    
  };

});
}}
