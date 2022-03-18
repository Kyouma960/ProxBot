const request = require('request');
const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'gsearch',
	description: 'google search',
execute(client,message,args){

const backId = 'back'
    const forwardId = 'forward'
    const closeId = 'close'

    var backButton = new MessageButton({
        style: 'SECONDARY',
        label: 'Back',
        emoji: '⬅️',
        customId: backId
    })
    var forwardButton = new MessageButton({
        style: 'SECONDARY',
        label: 'Forward',
        emoji: '➡️',
        customId: forwardId
    })
    var closeButton = new MessageButton({
        style: 'SECONDARY',
        label: 'Close',
        emoji: '❌',
        customId: closeId
    })
var query=0;
const options = {
  method: 'GET',
  url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+query,
  headers: {
    'x-user-agent': 'desktop',
    'x-proxy-location': 'JP',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key': process.env.rapid_api_key,
    useQueryString: true
  }
};
  
  if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);
  query=args.join(' ')
  


request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
}}



















const request = require('request');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'gimages',
    aliases: ['images'],
    category: 'image',
    utilisation: '{prefix} gimages [query]',
    description: 'Search for an image on google',

    execute(client, message, args) {

      // Constants

    const backId = 'back'
    const forwardId = 'forward'
    const closeId = 'close'
      
    var backButton = new MessageButton({
        style: 'SECONDARY',
        label: 'Back',
        emoji: '⬅️',
        customId: backId
    })
    var forwardButton = new MessageButton({
        style: 'SECONDARY',
        label: 'Forward',
        emoji: '➡️',
        customId: forwardId
    })
    var closeButton = new MessageButton({
        style: 'SECONDARY',
        label: 'Close',
        emoji: '❌',
        customId: closeId
    })

  
    var query = 0;

      const options = {
  method: 'GET',
  url: 'https://google-search3.p.rapidapi.com/api/v1/images/q='+query,
  headers: {
    'x-user-agent': 'desktop',
    'x-proxy-location': 'JP',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key': process.env.rapid_api_key,
    useQueryString: true
  }
};

      
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);
      
      query = args.join(' ');
      

      
request(options, function (error, response, body) {
	if (error) throw new Error(error);







// Put the following code wherever you want to send the embed pages:

const {author, channel} = message


/**
 * Creates an embed with guilds starting from an index.
 * @param {number} start The index to start from.
 * @returns {Promise<MessageEmbed>}
 */
const generateEmbed = async start => {
  

  // You can of course customise this embed however you want
  return new MessageEmbed({
    title: JSON.parse(body).image_results[start].link.title,
    image: {
                                        url: JSON.parse(body).image_results[start].image.src,
                                    },
                                    color: 'ORANGE',
                                    url: JSON.parse(body).image_results[start].link.href,
                                    description: JSON.parse(body).image_results[start].link.domain
                                })
}

// Send the embed with the first 10 guilds
var row = new MessageActionRow().addComponents(backButton, forwardButton, closeButton);

  
const embedMessage = await channel.send({
  embeds: [await generateEmbed(0)],
  components: [row]
   
    
})
// Exit if there is only one page of guilds (no need for all of this)


// Collect button interactions (when a user clicks a button),
// but only when the button as clicked by the original message author
const collector = embedMessage.createMessageComponentCollector({
  filter: ({user}) => user.id === author.id
})

let currentIndex = 0





  
collector.on('collect', async int => {
  // Increase/decrease index
                                if(int.customId == backId)
                                {
                                    currentIndex--;
                                }
                                else if(int.customId == forwardId)
                                {
                                    currentIndex++;
                                }
                                else if(int.customId == closeId)
                                {
                                    int.reply(`The embed has been closed ! ✅`);
                                    return int.message.delete();
                                }

                                if(currentIndex < 0)
                                {
                                    currentIndex = 0;
                                }
                                if(currentIndex == 100)
                                {
                                    currentIndex = 99;
                                }
  // Respond to interaction by updating message with new embed
  await int.update({
    embeds: [await generateEmbed(currentIndex)],
  })
})

