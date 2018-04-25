import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class bookController {
  constructor(private readonly bookService: BookService) { }

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }
}
