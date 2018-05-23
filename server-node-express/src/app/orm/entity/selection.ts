import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { IsNotEmpty } from 'class-validator';
import { isNotEmptyMessage } from '../../utils/validation.util';

@Entity('selections')
export class Selection {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  name: string;

  @Column()
  description: string;

  @ManyToMany(type => Book, { eager: true })
  @JoinTable()
  books: Book[];
}
