import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user';
import { Recipient } from './recipient';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { isNotEmptyMessage } from '../../utils/validation.util';
import { OrderItem } from './orderItem';

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne(type => User, user => user.orders)
  user: User;

  @Column(type => Recipient)
  @Type(type => Recipient)
  @ValidateNested()
  @IsNotEmpty({ message: isNotEmptyMessage })
  recipient: Recipient;

  @OneToMany(type => OrderItem, orderItem => orderItem.order, { eager: true })
  items: OrderItem[];

  @Column({ default: 0 })
  total: number;
}
