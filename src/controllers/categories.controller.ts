import { Controller, Get, Query } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('/api/category')
export class CategoryController {
  constructor(private readonly appService: CategoriesService) { }

  @Get()
  getAll(@Query('level') level:number) {
    return this.appService.getAll(level);
  }
}
