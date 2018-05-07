import { Book } from '../../model/book';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class BookEntity implements Book{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column('simple-array')
  authors: string[];

  @Column()
  coverUrl: string;

  @Column()
  inStock: number;
}