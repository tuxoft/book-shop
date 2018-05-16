import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category';

@Entity('books')
export class Book {

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

  @Column({ select: false })
  articul: number;

  @Column({ select: false })
  stock: number;

  @Column({ select: false })
  series: string;

  @Column({ select: false })
  publisher: string;

  @Column({ select: false })
  year: string;

  @Column({ select: false })
  pages: number;

  @Column({ select: false })
  isbn: string;

  @Column({ select: false })
  dimension: string;

  @Column({ select: false })
  weight: number;

  @Column({ select: false })
  decor: string;

  @Column({ select: false })
  restrictions: string;

  @Column({ select: false })
  description: string;

  @ManyToMany(type => Category, category => category.books)
  @JoinTable()
  categories: Category[];
}
