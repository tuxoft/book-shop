import { Column, Entity, ManyToMany, PrimaryColumn, Tree, TreeChildren, TreeParent } from 'typeorm';
import { Book } from './book';

@Entity('categories')
@Tree('materialized-path')
export class Category {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, unique: true, select: false })
  route?: string;

  @Column({ nullable: true })
  parentId: number;

  @TreeParent()
  parent?: Category;

  @TreeChildren()
  children?: Category[];

  @ManyToMany(type => Book, book => book.categories)
  books?: Book[];
}
