import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Name } from './name';
import { Book } from './book';

@Entity('authors')
export class Author {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => Name)
  name: Name;

  @ManyToMany(type => Book, book => book.authors)
  books?: Book[];
}
