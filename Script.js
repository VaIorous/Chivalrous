const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = ('MzE5MjUwNzQwMjg5OTk0Nzcz.DDAuLw.QrbMvUbAfGsT4SxxD6GM7RCYmrI');
const key = ('c!');
client.login(TOKEN);

//ready
client.on('ready', () => {
  client.user.setGame('Fuck Bursty');
  console.log('Client Secure');
});

//#Suggestions
client.on('message', message => {
  if (message.channel.name !== 'suggestions') return;
  var Tick = client.emojis.get('324619697804935178');
  message.react(Tick)
  var Cross = client.emojis.get('324619413984772097');
  message.react(Cross)
  console.log(`Suggestion Channels Secure`)
})

//#images
client.on('message', message => {
  if (message.channel.name !== 'images') return;
  if (!message.attachments.first('jpeg','jpg','png','gif'))
  message.delete();
  console.log(`Image Channels Secure`);
})


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(key)) return;

  let Command = message.content.split(' ')[0];
  Command = Command.slice(key.length);

  let args = message.content.split(' ').slice(1);

  if (Command === 'say') {
    message.delete();
    message.channel.send(args.join(' '));
  }

  if (Command === 'media') {
    message.delete();
    message.author.send('Coming soon!');
  }

  if (Command === 'commands') {
    message.delete();
    message.author.send('Coming soon!');
  }
});
