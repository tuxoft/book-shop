import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { City } from '../city/city.entity';

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
   * авторский знак
   */
  @Column()
  cutterCode?: string;
  /**
   * год издания
   */
  @Column()
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
  // @Column()
  // publisher?: Publisher;
  /**
   * авторы книги
   */
  // @Column()
  // authors?: BookAuthor[];

  /**
   * город издания
   */
  @ManyToOne(type => City)
  city: City;
  /**
   * язык издания
   */
  // @Column()
  // language?: Language;
  /**
   * серия книг
   */
  // @Column()
  // bookSeries?: BookSeries;
  /**
   * категории(жанр) книги
   */
  // @Column()
  // categories?: Category[];
  /**
   * URL обложки книги
   */
  @Column()
  coverUrl?: string;
}
