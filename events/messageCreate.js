const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = (client, message) => {
    if (message.author.bot) return;
    const px1 = client.config.app.px1;
    const px2 = client.config.app.px2;
    const px3 = client.config.app.px3;
    const px4 = client.config.app.px4;


    if (
      message.content.indexOf(px1) === 0)
    {
        const args = message.content.slice(px1.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

        if (cmd) cmd.execute(client, message, args);
    }

else if (
      message.content.indexOf(px2) === 0)
    {
        const args = message.content.slice(px2.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

        if (cmd) cmd.execute(client, message, args);
    }

    else if (
      message.content.indexOf(px3) === 0)
    {
        const args = message.content.slice(px3.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

        if (cmd) cmd.execute(client, message, args);
    }

    else if (
      message.content.indexOf(px4) === 0)
    {
        const args = message.content.slice(px4.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

        if (cmd) cmd.execute(client, message, args);
    }
else {
  return;
  }

    
};