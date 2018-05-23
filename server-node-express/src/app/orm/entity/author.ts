import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Name } from './name';
import { Book } from './book';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@Entity('authors')
export class Author {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => Name)
  @Type(type => Name)
  @ValidateNested()
  name: Name;

  @ManyToMany(type => Book, book => book.authors)
  books?: Book[];
}
