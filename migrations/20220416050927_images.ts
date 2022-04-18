import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('images', (table) => {
        table.increments('id');
        table.string('url', 255).notNullable();
        table.integer('product_id').unsigned()
            .index().references('id').inTable('products');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('images');
}

