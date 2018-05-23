/**
 * категория(жанр) книги
 */
export interface Category {
  id?: number;
  name?: string;
  parent?: Category;
  children?: Category[];
}
