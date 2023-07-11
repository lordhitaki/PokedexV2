'use strict';

/**
 * pokemon router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pokemon.pokemon', {
  // Defina as rotas do roteador personalizado aqui
  // Por exemplo, para buscar um Pokémon pelo nome
  findOneByName: {
    path: '/pokemons/:name',
    method: 'GET',
    handler: async (ctx) => {
      const { name } = ctx.params;

      try {
        const pokemon = await strapi.query('pokemon').findOne({
          where: { name },
        });
        return { data: pokemon };
      } catch (error) {
        return { error: 'Erro ao buscar o Pokémon.' };
      }
    },
  },
});
