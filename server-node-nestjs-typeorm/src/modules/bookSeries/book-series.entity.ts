import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * серия книг
 */
@Entity()
export class BookSeries {
  /**
   * уникальный идентификатор серии
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * признак удаления
   */
  @Column()
  deleted?: boolean;

  /**
   * название серии книг
   */
  @Column()
  name?: string;

  /**
   * описание серии книг
   */
  @Column()
  description?: string;
}
