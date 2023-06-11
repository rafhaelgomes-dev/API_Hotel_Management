import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tb_hotel', (table) => {
    table.increments('id');
    table.string('nome').notNullable();
    table.string('cnpj').notNullable();
    table.string('pais').notNullable();
    table.string('estado').notNullable();
    table.string('cidade').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('tb_hotel')
}

