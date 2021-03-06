'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 var axios = require('axios');
 var data = JSON.stringify({
   "channel": "C03CQ5MEAAH",
   "text": "Liverpool :tada:"
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


module.exports = {
    lifecycles: {

        afterCreate(result) {
            console.log('hhhhhhhhhhhhhhhhhhhhhhh', result);
            axios(config)
            .then(function (response) {
              console.log('message sended successssssss');
            })
            .catch(function (error) {
              console.log('error slack send',error);
            })
        },
      },
};
