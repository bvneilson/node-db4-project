
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.text('title', 128)
      .notNullable();
    tbl.text('description', 128);
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.text('name', 128)
      .notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id').inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.integer('ingredient_id')
      .notNullable()
      .unsigned()
      .references('id').inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.float('amount')
      .notNullable();
    tbl.text('unit_of_measurement', 128)
      .notNullable();
    tbl.primary(['recipe_id', 'ingredient_id']);
  })
  .createTable('instructions', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id').inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.integer('step_number')
      .notNullable();
    tbl.text('instruction', 128)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions')
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes');
};
