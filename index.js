const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('config.json'));
let configuredMessages = 0;

client.once('ready', () => {
    console.log('[INFO] Bot online');
    client.user.setStatus("invisible");
    console.log('[INFO] Bot set status to invisible');
    let Counting = true;
    console.log('[INFO] Counting configured Messages')
    while (Counting){
        if(config.hasOwnProperty('message' + (configuredMessages + 1))){
            configuredMessages++;
            let msg = '<@&'+ config['message' + configuredMessages].roleToMention +'> <@123> ' + config['message' + configuredMessages].msg
            console.log('   > Message ' + configuredMessages + ': ' + msg);
        }
        else{
            Counting = false;
            console.log('[INFO] Found ' + configuredMessages + ' Configured Messages')
        }
    }
})

client.on('voiceStateUpdate', (oldState, newState) =>{    
    for(i = 1; i <= configuredMessages; i++){
        if (newState.channelID === config['message' + i].vc && newState.guild == config['message' + i].guild) {
            let msg = '<@&'+config['message' + i].roleToMention+'> <@' + newState.member.id + '> ' + config['message' + i].msg
            client.channels.cache.get(config['message' + i].msgChannel).send(msg);
            console.log('[INFO] Send message in ' + config['message' + i].guild + ' to' + config['message' + i].msgChannel + ' > ', msg)
        }
    }
})

client.login(config.token);
