import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { BookSeries } from './bookSeries';

@Entity('publishers')
export class Publisher {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Book, book => book.publisher)
  books?: Book[];

  @OneToMany(type => BookSeries, bookSeries => bookSeries.publisher)
  bookSeries?: BookSeries[];
}
