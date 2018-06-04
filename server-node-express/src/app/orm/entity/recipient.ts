import { Column } from 'typeorm';
import { IsEmail, IsMobilePhone, IsNotEmpty, ValidateNested } from 'class-validator';
import { Name } from './name';
import { Type } from 'class-transformer';
import { Address } from './address';
import {
  isEmailMessage,
  isMobilePhoneMessage,
  isNotEmptyMessage,
} from '../../utils/validation.util';

export class Recipient {

  @Column(type => Name)
  @Type(type => Name)
  @ValidateNested()
  @IsNotEmpty({ message: isNotEmptyMessage })
  name: Name;

  @Column(type => Address)
  @Type(type => Address)
  @ValidateNested()
  @IsNotEmpty({ message: isNotEmptyMessage })
  address: Address;

  @Column()
  @IsEmail(undefined, { message: isEmailMessage })
  email: string;

  @Column()
  @IsMobilePhone('ru-RU', { message: isMobilePhoneMessage })
  phoneNumber: string;
}
