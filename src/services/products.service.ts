import { Injectable } from '@nestjs/common';
import {  KnexPagination } from '@mithleshjs/knex-nest';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
@Injectable()
export class ProductsService {
  constructor(@InjectModel() private readonly knex: Knex) { }
  async getAll(page:number) {
    const query = this.knex('products');
    const result = await KnexPagination.offsetPaginate({
        query: query,
      perPage: 10,
      goToPage: page | 1,
    });
    for(let i = 0;i < result.data.length; i++) {
      result.data[i].images = await this.knex('images').where('product_id',result.data[i].id);
    }
    return result;
  }
}

