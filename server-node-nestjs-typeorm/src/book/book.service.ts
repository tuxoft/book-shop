import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Component()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) { }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async create(book: Book): Promise<Book> {
    // let resultBook: Book = await this.bookRepository.create(book);
    return await this.bookRepository.save(book);
  }
}
