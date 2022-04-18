import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.raw("ALTER TABLE `drug`.`products` CHANGE COLUMN `long_description` `long_description` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL")
}


export async function down(knex: Knex): Promise<void> {
}

