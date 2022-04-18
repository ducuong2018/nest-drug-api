import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { CategoryController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { knexSnakeCaseMappers } from './helpers/identifierMappings'
@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          port: 33066,
          user: 'root',
          password: '',
          database: 'drug',
        },
        ...knexSnakeCaseMappers(),
      },
    }),
  ],
  controllers: [CategoryController,ProductsController],
  providers: [CategoriesService,ProductsService],
})
export class AppModule { }
