import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { BookModule } from './book/book.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, BookModule, CityModule],
})
export class ApplicationModule { }
