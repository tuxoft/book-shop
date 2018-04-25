import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/book/book.module';
import { CityModule } from './modules/city/city.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { AuthorModule } from './modules/author/author.module';
import { BookAuthorModule } from './modules/book-author/book-author.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookModule,
    CityModule,
    PublisherModule,
    AuthorModule,
    BookAuthorModule],
})
export class ApplicationModule { }
