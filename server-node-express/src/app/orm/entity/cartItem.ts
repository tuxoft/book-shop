import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartEntity } from './cart';
import { BookEntity } from './book';

@Entity('cart-item')
export class CartItemEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => CartEntity, cart => cart.items)
  cart: CartEntity;

  @OneToOne(type => BookEntity)
  @JoinColumn()
  book: BookEntity;

  @Column()
  count: number;
}
