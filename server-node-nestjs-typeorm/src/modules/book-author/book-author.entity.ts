import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Book } from '../book/book.entity';
import { Author } from '../author/author.entity';

/**
 * автор книги
 */
@Entity()
export class BookAuthor {
  /**
   * уникальный идентификатор города
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * позиция в списке авторов
   */
  @Column()
  posititon: number;

  /**
   * автор
   */
  @ManyToOne(type => Author, author => author.bookAuthors)
  @JoinColumn({ name: 'author_id' })
  author: Author;

  /**
   * книга
   */
  @ManyToOne(type => Book, book => book.authors)
  @JoinColumn({ name: 'book_id' })
  book: Book;
}
