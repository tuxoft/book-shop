import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category';
import { Author } from './author';
import { Publisher } from './publisher';
import { BookSeries } from './bookSeries';
import { IsInt, IsISBN, IsNotEmpty } from 'class-validator';
import { isIntMessage, isIsbnMessage, isNotEmptyMessage } from '../../utils/validation.util';

@Entity('books')
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  title: string;

  @Column()
  @IsInt({ message: isIntMessage })
  price: number;

  @Column()
  @IsInt({ message: isIntMessage })
  inStock: number;

  @ManyToMany(type => Author, author => author.books, { eager: true })
  @JoinTable()
  authors: Author[];

  @Column()
  coverUrl: string;

  @Column({ select: false })
  @IsInt({ message: isIntMessage })
  articul: number;

  @ManyToOne(type => BookSeries, bookSeries => bookSeries.books)
  bookSeries: BookSeries;

  @ManyToOne(type => Publisher, publisher => publisher.books)
  publisher: Publisher;

  @Column({ select: false })
  publicationYear: string;

  @Column({ select: false })
  @IsInt({ message: isIntMessage })
  pageCount: number;

  @Column({ select: false })
  @IsISBN(undefined, { message: isIsbnMessage })
  isbn: string;

  @Column({ select: false })
  udc: string;

  @Column({ select: false })
  bbk: string;

  @Column({ select: false })
  @IsInt({ message: isIntMessage })
  circulation: number;

  @Column({ select: false })
  dimensions: string;

  @Column({ select: false })
  @IsInt({ message: isIntMessage })
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
