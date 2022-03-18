
const { Client, Intents } = require('discord.js');

const keepAlive = require("./server");


global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    partials: [
        'CHANNEL', // Required to receive DMs
    ],
    disableMentions: 'everyone',
});

client.config = require('./values/config');

require('./src/loader');
keepAlive();
client.login(process.env.TOKEN);