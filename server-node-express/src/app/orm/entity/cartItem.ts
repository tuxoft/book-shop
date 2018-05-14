import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartEntity } from './cart';
import { BookEntity } from './book';

@Entity('cart-items')
@Index(['cartId', 'bookId'], { unique: true })
export class CartItemEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cartId: number;

  @ManyToOne(type => CartEntity, cart => cart.items)
  cart: CartEntity;

  @Column()
  bookId: number;

  @ManyToOne(type => BookEntity, { eager: true })
  book: BookEntity;

  @Column({ default: 1 })
  count: number;
}
