const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// Authenticate the bot with your Discord account using the token
client.login('YOUR_BOT_TOKEN');

// Function to send an image to a designated channel every day
function sendImage() {
  // Get the designated channel
  let channel = client.channels.cache.get('CHANNEL_ID');
  // Send the image to the channel
  channel.send({ files: ['path/to/image.jpg'] });
}

// Schedule the function to run every day
setInterval(sendImage, 86400000); // 86400000 milliseconds = 24 hours
