import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categories', (table) => {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('image', 255).defaultTo(null);
        table.string('level', 255).defaultTo(null);
        table.string('parent_id', 255).defaultTo(null);
        table.string('slug', 255).defaultTo(null);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('categories');
}

