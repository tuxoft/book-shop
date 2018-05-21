import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';

@Entity('selections')
export class Selection {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(type => Book, { eager: true })
  @JoinTable()
  books: Book[];
}
