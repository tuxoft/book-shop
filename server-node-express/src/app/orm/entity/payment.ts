import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Order } from './order';

@Entity('payments')
export class Payment {

  @PrimaryColumn()
  id: string;

  @Column('datetime')
  createdDate: Date;

  @ManyToOne(type => Order, order => order.payments)
  order: Order;

  @Column({ default: 0 })
  total: number;

  @Column({ default: false })
  paid: boolean;

  @Column()
  status: string;
}
