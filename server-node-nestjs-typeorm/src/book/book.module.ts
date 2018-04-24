import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { bookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  components: [BookService],
  controllers: [bookController],
})
export class BookModule { }
