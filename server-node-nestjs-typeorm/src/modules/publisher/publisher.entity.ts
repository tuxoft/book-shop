import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * издательство
 */
@Entity()
export class Publisher {
  /**
   * уникальный идентификатор издательства
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * признак удаления
   */
  @Column()

  deleted: boolean;

  /**
   * название издательства
   */
  @Column()
  name: string;
}
