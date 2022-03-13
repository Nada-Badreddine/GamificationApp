const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.writer.search(ctx.query);
    } else {
      entities = await strapi.services.writer.find(ctx.query,['writer_rewards', 'writer_rewards.type_rewards'] );
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.writer }));
  },
};