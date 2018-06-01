import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Cart } from './cart';
import { Order } from './order';

@Entity('users')
export class User {

  @PrimaryColumn()
  id: string;

  @OneToOne(type => Cart, cart => cart.user, { eager: true })
  @JoinColumn()
  cart: Cart;

  @OneToMany(type => Order, order => order.user, { eager: true })
  orders: Order[];
}
