import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItem } from './cartItem';

@Entity('carts')
export class Cart {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany(type => CartItem, cartItem => cartItem.cart, { eager: true })
  items: CartItem[];
}
