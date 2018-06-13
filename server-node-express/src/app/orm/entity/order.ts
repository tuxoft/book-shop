import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';
import { Recipient } from './recipient';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { isNotEmptyMessage } from '../../utils/validation.util';
import { OrderItem } from './orderItem';
import { Payment } from './payment';

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  userId: string;

  @ManyToOne(type => User, user => user.orders)
  user: User;

  @Column(type => Recipient)
  @Type(type => Recipient)
  @ValidateNested()
  @IsNotEmpty({ message: isNotEmptyMessage })
  recipient: Recipient;

  @OneToMany(type => OrderItem, orderItem => orderItem.order, { eager: true })
  items: OrderItem[];

  @OneToMany(type => Payment, payment => payment.order, { eager: true })
  payments: Payment[];

  @Column({ default: 0 })
  total: number;
}
