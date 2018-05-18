import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category';
import { Author } from './author';
import { Publisher } from './publisher';
import { BookSeries } from './bookSeries';

@Entity('books')
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  inStock: number;

  @ManyToMany(type => Author, author => author.books, { eager: true })
  @JoinTable()
  authors: Author[];

  @Column()
  coverUrl: string;

  @Column({ select: false })
  articul: number;

  @ManyToOne(type => BookSeries, bookSeries => bookSeries.books)
  bookSeries: BookSeries;

  @ManyToOne(type => Publisher, publisher => publisher.books)
  publisher: Publisher;

  @Column({ select: false })
  publicationYear: string;

  @Column({ select: false })
  pageCount: number;

  @Column({ select: false })
  isbn: string;

  @Column({ select: false })
  udc: string;

  @Column({ select: false })
  bbk: string;

  @Column({ select: false })
  circulation: number;

  @Column({ select: false })
  dimensions: string;

  @Column({ select: false })
  weight: number;

  @Column({ select: false })
  coverType: string;

  @Column({ select: false })
  ageLimit: string;

  @Column({ select: false })
  description: string;

  @ManyToMany(type => Category, category => category.books)
  @JoinTable()
  categories: Category[];
}
