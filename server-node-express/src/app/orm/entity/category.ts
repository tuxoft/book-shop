import { Column, Entity, PrimaryColumn, Tree, TreeChildren, TreeParent } from 'typeorm';

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
}
