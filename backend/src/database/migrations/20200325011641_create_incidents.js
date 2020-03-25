
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
        table.increments(); //autoincremento do id
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable(); //campo id que vai ser chave estrangeira da tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs'); //modo de associar as chaves estrangeiras
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};