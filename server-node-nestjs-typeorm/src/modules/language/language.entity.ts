import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * язык книги
 */
@Entity()
export class Language {
  /**
   * уникальный идентификатор языка
   */
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  deleted?: boolean;
  /**
   * название языка
   */
  @Column()
  name?: string;
  /**
   * код языка
   */
  @Column()
  codeName?: string;
}
