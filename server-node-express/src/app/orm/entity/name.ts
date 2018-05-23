import { Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { isNotEmptyMessage } from '../../utils/validation.util';

export class Name {

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  first: string;

  @Column({ nullable: true })
  middle?: string;

  @Column({ nullable: true })
  last?: string;
}
