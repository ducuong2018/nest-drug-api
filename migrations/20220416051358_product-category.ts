import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('product_category', (table) => {
        table.increments('id');
        table.integer('product_id').unsigned()
            .index().references('id').inTable('products');
        table.integer('category_id').unsigned()
            .index().references('id').inTable('categories');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('product_category')
}

