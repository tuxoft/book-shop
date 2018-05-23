import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { Publisher } from './publisher';
import { IsNotEmpty } from 'class-validator';
import { isNotEmptyMessage } from '../../utils/validation.util';

@Entity('bookSeries')
export class BookSeries {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  name: string;

  @ManyToOne(type => Publisher, publisher => publisher.bookSeries)
  publisher: Publisher;

  @OneToMany(type => Book, book => book.bookSeries)
  books?: Book[];
}
