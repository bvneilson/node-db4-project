const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}

module.exports = {
  addRecipe
};
