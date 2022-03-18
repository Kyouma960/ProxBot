const request = require('request');
const roasts = require('/home/runner/proximanode/values/roasts');
const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'facts',
	description: 'facts',
execute(client,message){
var limit = 1
var probab=(Math.floor(Math.random() * 6)+1);
var roastnum=(Math.floor(Math.random() * 10)+1);
request.get({
  url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
  headers: {
    'X-Api-Key': process.env.api_ninja_key
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else if(probab!==2){
    message.channel.send(JSON.parse(body)[0].fact); 
  }
  else{
   message.channel.send(roasts.roastsentences[roastnum]);
  }
});
}}
