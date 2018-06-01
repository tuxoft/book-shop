import { Column } from 'typeorm';
import { IsInt, IsNotEmpty } from 'class-validator';
import { isIntMessage, isNotEmptyMessage } from '../../utils/validation.util';

export class Address {

  @Column()
  @IsInt({ message: isIntMessage })
  postalIndex: number;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  country: string;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  city: string;

  @Column()
  @IsNotEmpty({ message: isNotEmptyMessage })
  street: string;
}
