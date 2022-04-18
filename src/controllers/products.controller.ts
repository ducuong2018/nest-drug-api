import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('/api/products')
export class ProductsController {
  constructor(private readonly appService: ProductsService) { }

  @Get()
  getAll(@Query('page') page:number) {
    return this.appService.getAll(page);
  }
}
