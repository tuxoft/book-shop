import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Book } from '../book/book.entity';

/**
 * категория(жанр) книги
 */
@Entity()
export class Category {
  /**
   * уникальный идентификатор категории
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * наименование категории
   */
  @Column()
  text: string;

  @ManyToMany(type => Book, book => book.categories)
  @JoinTable()
  books: Book[];
}
