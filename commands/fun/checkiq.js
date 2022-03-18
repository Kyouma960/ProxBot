const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'checkiq',
	description: 'This checks peoples iq',
  execute(client,message, args){
    
     if(message.author.id === '638372462295515136' || message.author.id === '737877747203964959'){
       message.channel.send("Your IQ is $#####$$$$$$#$#$#@*");
       message.channel.send("Fatal error:  IQ too low to be calculated!");
     }else if(message.author.id === '448288731204681729'){
        message.channel.send("Your IQ is 10^200, highest on earth");}
        else if(message.author.id === '793038745640501268'){
        message.channel.send("Your iq is: 69420");
        message.channel.send("nice");}else if(message.author.id === '843131280140926996'){
        message.channel.send("Your iq is: 69");
        message.channel.send("nice");}else{
    
    const iq = (Math.floor(Math.random() * 100)+40);
    message.channel.send('Your iq is: '+ iq);

    if(iq===69){
      message.channel.send("nice");
    }else if(iq<50){
      message.channel.send("You have mental problem");
    }else if(iq<100 && iq>50){
      message.channel.send("You are pretty average");
    }else if(iq>100){
      message.channel.send("You are megamind");
    }
    
  }
  }
}