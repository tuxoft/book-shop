import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItemEntity } from './cartItem';

@Entity('carts')
export class CartEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany(type => CartItemEntity, cartItem => cartItem.cart, { eager: true })
  items: CartItemEntity[];
}
