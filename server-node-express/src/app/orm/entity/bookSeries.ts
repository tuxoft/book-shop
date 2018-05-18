import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { Publisher } from './publisher';

@Entity('bookSeries')
export class BookSeries {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Publisher, publisher => publisher.bookSeries)
  publisher: Publisher;

  @OneToMany(type => Book, book => book.bookSeries)
  books?: Book[];
}
