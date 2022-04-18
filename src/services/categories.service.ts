import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel() private readonly knex: Knex) { }
  async getAll(level?: number) {
    if(level) {
      return await this.knex.table('categories').where('level',level);
    }
    return await this.knex.table('categories');
  }
}