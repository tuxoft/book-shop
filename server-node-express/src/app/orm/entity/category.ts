import { Column, Entity, ManyToMany, PrimaryColumn, Tree, TreeChildren, TreeParent } from 'typeorm';
import { BookEntity } from './book';

@Entity('categories')
@Tree('materialized-path')
export class CategoryEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @TreeParent()
  parent: CategoryEntity;

  @TreeChildren()
  children: CategoryEntity[];

  @ManyToMany(type => BookEntity, book => book.categories)
  books: BookEntity[];
}
