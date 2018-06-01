import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.orders)
  user: User;
}
