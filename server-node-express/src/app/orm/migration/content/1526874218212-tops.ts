import { MigrationInterface, QueryRunner } from "typeorm";
import { Selection } from '../../entity/selection';
import { Book } from '../../entity/book';

export class Tops1526874218212 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const selections = [
      {
        name: 'Книги, которые приятно читать, укрывшись пледом',
        books: [21, 13, 14],
        description: 'Идеальное времяпрепровождение - лежать на диване/кровати или сидеть в кресле, укрывшись пледом. Конечно, пледом особо не укроешься летом, но вот осень, зима и начало весны вполне подходят.',
      },
      {
        name: 'Классические кирпичи (книги от 800 страниц)',
        books: [17, 24, 1],
        description: 'Классические книги объемом больше 800 страниц',
      },
      {
        name: 'Книги о писателях',
        books: [7, 17, 24],
        description: 'В этой подборке будут только художественные книги, где главный или второстепенный герой - писатель. Не автобиографии.',
      },
      {
        name: '10 любимых книг Бориса Гребенщикова',
        books: [14, 10, 5],
        description: 'В 2012 году по просьбе издательства «Розовый жираф», специализирующегося на книгах для детей, Гребенщиков составил список десяти своих любимых книг.',
      },
    ];

    const selectionsRepo = queryRunner.connection.getRepository(Selection);
    const booksRepo = queryRunner.connection.getRepository(Book);
    for (let i = 0; i < selections.length; i++) {
      const item = selections[i];
      const selection = selectionsRepo.create({
        ...item,
        books: await booksRepo.findByIds(item.books),
      });
      await selectionsRepo.save(selection);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
