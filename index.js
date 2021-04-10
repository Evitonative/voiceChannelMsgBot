const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('config.json'));

client.once('ready', () => {
    console.log('Ready!');
    client.user.setStatus("invisible");
})

client.on('voiceStateUpdate', (oldState, newState) =>{
    if (newState.guild != config.guild) return;
    if (newState.channelID === config.messages1.vc) {
        client.channels.cache.get(config.messages1.msgChannel).send(config.messages1.msg);
        console.log('msg > ', config.messages1.msgChannel)
    }
})

client.login(config.token);