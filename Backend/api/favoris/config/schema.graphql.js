'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    mutation: `
            deleteFavItem(id: String!): String!
        `,
        resolver: {
          Mutation: {
              deleteFavItem: {
                  description: 'Return a list of products by category',
                  resolverOf: 'application::gifts.gifts.find',
                  resolver:async (obj, options, { context }) => {
                    console.log("options", options)
                      const a = await strapi.services.favoris.delete({id: options.id})                  
                    return "deleted"
                  }
              }
            },
        },
    };