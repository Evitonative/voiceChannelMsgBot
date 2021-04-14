# Discord Voice Channel Message Bot
This is a simple Discord bot designed to send message into a channel when someone joins a voicechannel.

## Installation
0. Download and install Nodejs
1. Download the lastest realease or the code.
2. Open the folder in a terminal or command promt (`cd your/path/her` or on windows `cd your\directory\here`)
3. Enter `npm install` in your terminal
4. Edit the `config.json` for your needs
5. Run `node index.js` to start the Bot

## Add or remove Messages
### Add Message
You coppy the json block of anthor message including the , in the and of the previos line. Than you channge `message2` to `message3`for example. If you leave a number out the folowing nummers will not be used. message1, message2, message4 would ignore message4.

**Example of what to coppy to add new message.**
```json
,
    "message2": {
        "vc": "ID of the voicechannel to look for",        
        "guild": "The Id of the Guild the voicechannel is in.",
        "msgChannel": "The Channel id of the Server the Voicechannel is in",
        "roleToMention": "The Id of the role which should be menthioned",
        "msg": "The message sent. Note all messages start with @role @user"
    }
```

### Remove Message
You have to remove Everythin from `message...`to `}.`
Note allways make shure the number go up and you leave no number out.
**Default config with message 2 removed:**
```json
{
    "token": "Your Token https://discord.com/developers",
    "message1": {
        "vc": "ID of the voicechannel to look for",        
        "guild": "The Id of the Guild the voicechannel is in.",
        "msgChannel": "The Channel id of the Server the Voicechannel is in",
        "roleToMention": "The Id of the role which should be menthioned",
        "msg": "The message sent. Note all messages start with @role @user"
    }
}
```

## Default Config
```json
{
    "token": "Your Token https://discord.com/developers",
    "message1": {
        "vc": "ID of the voicechannel to look for",        
        "guild": "The Id of the Guild the voicechannel is in.",
        "msgChannel": "The Channel id of the Server the Voicechannel is in",
        "roleToMention": "The Id of the role which should be menthioned",
        "msg": "The message sent. Note all messages start with @role @user"
    },
    "message2": {
        "vc": "ID of the voicechannel to look for",        
        "guild": "The Id of the Guild the voicechannel is in.",
        "msgChannel": "The Channel id of the Server the Voicechannel is in",
        "roleToMention": "The Id of the role which should be menthioned",
        "msg": "The message sent. Note all messages start with @role @user"
    }
}
```
