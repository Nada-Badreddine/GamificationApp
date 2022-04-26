const { WebClient} = require("@slack/web-api");
const token = process.env.SLACK_TOKEN;

var axios = require('axios');
var data = JSON.stringify({
  "channel": "C03CQ5MEAAH",
  "text": "Hello world :tada:"
});

var config = {
  method: 'post',
  url: 'https://hooks.slack.com/services/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',
  headers: { 
    'Authorization': 'Bearer xoxp-xapp-1-A03DMG1QRLG-3452505188785-a0c3f60f6776e3f1276ce5b88f2a6cc9c0689ac2dd9281fb9701013a315afbb3', 
    'Content-Type': 'application/json'
  },
  data : data
};

const web = new WebClient(token);
const conversationId =  'C03CV020X8V';
module.exports = {
  async create() {
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }





 }






