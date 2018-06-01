import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartItem } from './cartItem';
import { User } from './user';

@Entity('carts')
export class Cart {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => User, user => user.cart)
  user: User;

  @OneToMany(type => CartItem, cartItem => cartItem.cart, { eager: true })
  items: CartItem[];
}
