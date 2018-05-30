import { getConnection } from 'typeorm';
import { Book } from '../entity/book';
import { Author } from '../entity/author';
import { BookSeries } from '../entity/bookSeries';
import { Cart } from '../entity/cart';
import { CartItem } from '../entity/cartItem';
import { Category } from '../entity/category';
import { Selection } from '../entity/selection';
import { Publisher } from '../entity/publisher';

export const getBookRepository = () => getConnection().getRepository(Book);

export const getAuthorRepository = () => getConnection().getRepository(Author);

export const getBookSeriesRepository = () => getConnection().getRepository(BookSeries);

export const getCartRepository = () => getConnection().getRepository(Cart);

export const getCartItemRepository = () => getConnection().getRepository(CartItem);

export const getCategoryRepository = () => getConnection().getRepository(Category);

export const getCategoryTreeRepository = () => getConnection().getTreeRepository(Category);

export const getPublisherRepository = () => getConnection().getRepository(Publisher);

export const getSelectionRepository = () => getConnection().getRepository(Selection);
