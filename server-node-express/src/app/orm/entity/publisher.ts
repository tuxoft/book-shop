import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { BookSeries } from './bookSeries';
import { IsNotEmpty } from 'class-validator';
import { isNotEmptyMessage } from '../../utils/validation.util';

@Entity('publishers')
export class Publisher {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  name: string;

  @OneToMany(type => Book, book => book.publisher)
  books?: Book[];

  @OneToMany(type => BookSeries, bookSeries => bookSeries.publisher)
  bookSeries?: BookSeries[];
}
