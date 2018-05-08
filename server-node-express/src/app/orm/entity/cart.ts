import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItemEntity } from './cartItem';

@Entity('cart')
export class CartEntity {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @OneToMany(type => CartItemEntity, cartItem => cartItem.cart, {cascade: true, eager: true})
  items: CartItemEntity[];
}
