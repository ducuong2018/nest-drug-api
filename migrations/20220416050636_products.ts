import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', (table) => {
        table.charset('utf8mb4');
        table.collate('utf8mb4_unicode_ci');
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('price', 255).defaultTo(null);
        table.string('sale_price', 255).defaultTo(null);
        table.text('description').defaultTo(null);
        table.text('long_description').defaultTo(null);
        table.string('email').unique();
        table.text('slug').defaultTo(null);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}

