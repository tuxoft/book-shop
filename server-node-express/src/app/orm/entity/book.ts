import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BookEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articul: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column('simple-array')
  authors: string[];

  @Column()
  coverUrl: string;

  @Column()
  stock: number;

  @Column()
  series: string;

  @Column()
  publisher: string;

  @Column()
  year: string;

  @Column()
  pages: number;

  @Column()
  isbn: string;

  @Column()
  dimension: string;

  @Column()
  weight: number;

  @Column()
  decor: string;

  @Column()
  restrictions: string;

  @Column()
  description: string;
}
