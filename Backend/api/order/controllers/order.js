const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
  async create(ctx) {
    console.log('createkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.order.create(data, { files });
    } else {
      entity = await strapi.services.order.create(ctx.request.body);
    }
    strapi.services.sendmail.send(welcome, toEmail, 'Gift Order', `An order has been created `);
    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};