const { RTMClient, WebClient } = require('@slack/client');
const token = 'xoxb-335096973780-3IZn2WibFhLXpEg19BiqeUU4';

const rtm = new RTMClient(token);
rtm.start();

const web = new WebClient(token);

let channel;

web.channels.list()
  .then((res) => {
    channel = res.channels.find(c => c.is_member);
});

rtm.on('message', (message) => {
    if(message.text.includes('U9V2UUMNY')){
        rtm.sendMessage(message.text.replace("<@U9V2UUMNY>:",""), channel.id)
    }
});
