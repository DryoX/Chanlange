const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hei') {
    	message.reply('TAYO');
  	}
});

client.on('message', message => {
    if (message.content === 'mas') {
    	message.reply('MASUK PAKE KO');
  	}
});

client.on('message', message => {
    if (message.content === 'halo') {
    	message.reply('halo-halo bandung');
  	}
});

client.on('message', message => {
    if (message.content === 'pak') {
    	message.reply('meletus balon hijau PAK');
  	}
});

client.on('message', message => {
    if (message.content === 'mbak') {
    	message.reply('command: hei,mas,halo,pak');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
