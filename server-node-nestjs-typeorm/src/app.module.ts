import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/book/book.module';
import { CityModule } from './modules/city/city.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { AuthorModule } from './modules/author/author.module';
import { BookAuthorModule } from './modules/book-author/book-author.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookModule,
    CityModule,
    PublisherModule,
    AuthorModule,
    BookAuthorModule,
    CategoryModule],
})
export class ApplicationModule { }
