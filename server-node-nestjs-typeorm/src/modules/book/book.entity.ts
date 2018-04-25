import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { City } from '../city/city.entity';
import { Publisher } from '../publisher/publisher.entity';
import { BookAuthor } from '../book-author/book-author.entity';
import { Language } from '../language/language.entity';
import { BookSeries } from '../bookSeries/book-series.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Book {
  /**
   * уникальный идентификатор книги
   */
  @PrimaryGeneratedColumn() id: number;

  /**
   * название книги
   */
  @Column({ length: 500 })
  title: string;

  @Column('text') subtitle: string;

  /**
   * номер издания
   */
  @Column()
  edition?: number;

  /**
   * международный стандартный книжный номер
   */
  @Column()
  ISBN?: string;

  /**
   * индекс Универсальной десятичной классификации
   */
  @Column()
  UDC?: string;

  /**
   * индекс Библиотечно - библиографической классификации
   */
  @Column()
  BBK?: string;
  /**
   * индекс Библиотечно - библиографической классификации
   */
  @Column()
  BBC?: string;

  /**
   * авторский знак
   */
  @Column()
  cutterCode?: string;

  /**
   * год издания
   */
  @Column('datetime')
  publicationYear?: Date;

  /**
   * тираж
   */
  @Column()
  circulation?: number;

  /**
   * цена
   */
  @Column()
  price?: number;

  /**
   * в наличии
   */
  @Column()
  inStock?: number;

  /**
   * издательство
   */
  @ManyToOne(type => Publisher)
  publisher: Publisher;

  /**
   * авторы книги
   */
  @OneToMany(type => BookAuthor, bookAuthor => bookAuthor.book)
  authors?: BookAuthor[];

  /**
   * город издания
   */
  @ManyToOne(type => City)
  city: City;

  /**
   * язык издания
   */
  @ManyToOne(type => Language)
  language: Language;

  /**
   * серия книг
   */
  @ManyToOne(type => BookSeries)
  bookSeries: BookSeries;

  /**
   * категории(жанр) книги
   */
  @ManyToMany(type => Category, category => category.books)
  categories: Category[];

  /**
   * URL обложки книги
   */
  @Column()
  coverUrl?: string;
}
