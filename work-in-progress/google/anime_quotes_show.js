
module.exports = {
    name: 'aquotes show',
    aliases: ['aquote show'],
    category: 'quotes',
   
    description: 'Search for anime quotes',

    execute(client, message, args) {

if (!args[0]){
  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => return message.channel.send(quote))
}
 

      
    }}