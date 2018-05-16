import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cart } from './cart';
import { Book } from './book';

@Entity('cart-items')
@Index(['cartId', 'bookId'], { unique: true })
export class CartItem {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cartId: number;

  @ManyToOne(type => Cart, cart => cart.items)
  cart: Cart;

  @Column()
  bookId: number;

  @ManyToOne(type => Book, { eager: true })
  book: Book;

  @Column({ default: 1 })
  count: number;
}
