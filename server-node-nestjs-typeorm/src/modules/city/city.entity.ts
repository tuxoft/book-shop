import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * город издания
 */
@Entity()
export class City {
  /**
   * уникальный идентификатор города
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deleted: boolean;

  /**
   * название города
   */
  @Column()
  name: string;

  /**
   * код города
   */
  @Column()
  codeName: string;
}
