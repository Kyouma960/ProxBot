const request = require('request');
const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'quotes',
	description: 'quotes',
execute(client,message){
const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  qs: {language_code: 'en'},
  headers: {
    'x-rapidapi-host': 'quotes15.p.rapidapi.com',
    'x-rapidapi-key': process.env.rapid_api_key,
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

  message.channel.send('**'+ JSON.parse(body).content+'**');
  message.channel.send('-'+JSON.parse(body).originator.name);
});
}}
  
