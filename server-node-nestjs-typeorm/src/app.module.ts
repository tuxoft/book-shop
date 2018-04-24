import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, BookModule],
})
export class ApplicationModule { }
