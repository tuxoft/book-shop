import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookAuthor } from '../book-author/book-author.entity';

/**
 * автор
 */
@Entity()
export class Author {
  /**
   * уникальный идентификатор автора
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Имя
   */
  @Column()
  firstName: string;
  /**
   * Отчество
   */
  @Column()
  middleName: string;
  /**
   * Фамилия
   */
  @Column()
  lastName: string;

  @OneToMany(type => BookAuthor, bookAuthor => bookAuthor.author)
  bookAuthors: BookAuthor[];
}
