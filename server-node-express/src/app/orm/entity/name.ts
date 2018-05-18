import { Column } from 'typeorm';

export class Name {

  @Column()
  first: string;

  @Column({ nullable: true })
  middle?: string;

  @Column({ nullable: true })
  last?: string;
}
