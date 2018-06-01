import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { Order } from './order';

@Entity('order-items')
export class OrderItem {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Order, order => order.items)
  order: Order;

  @ManyToOne(type => Book, { eager: true })
  book: Book;

  @Column()
  count: number;

  @Column({ default: 0 })
  sum: number;
}
