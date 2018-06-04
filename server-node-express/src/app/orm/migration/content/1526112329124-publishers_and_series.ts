import { MigrationInterface, QueryRunner } from "typeorm";
import { Publisher } from '../../entity/publisher';
import { BookSeries } from '../../entity/bookSeries';

export class Authors1526112329123 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const publishers: Publisher[] = [
      { id: 1, name: 'Эксмо' },
      { id: 2, name: 'АСТ' },
      { id: 3, name: 'Редакция Елены Шубиной' },
      { id: 4, name: 'Азбука' },
      { id: 5, name: 'Какой-то издатель' },
    ];

    const bookSeries: BookSeries[] = [
      { id: 1, name: 'Классика', publisherId: 1 },
      { id: 2, name: 'Классика для школьников', publisherId: 2 },
      { id: 3, name: 'Проза Гузель Яхиной', publisherId: 3 },
      { id: 4, name: 'Миры Марии Семеновой', publisherId: 4 },
      { id: 5, name: 'Какая-то серия', publisherId: 5 },
      { id: 6, name: 'Еще Какая-то серия', publisherId: 5 },
      { id: 7, name: 'Ну и еще одна серия', publisherId: 5 },
    ];

    const publisherRepo = queryRunner.connection.getRepository(Publisher);
    const bookSeriesRepo = queryRunner.connection.getRepository(BookSeries);

    for (let i = 0; i < publishers.length; i++) {
      const item = publishers[i];
      const publisherEntity = publisherRepo.create(item);
      await publisherRepo.save(publisherEntity);
    }

    for (let i = 0; i < bookSeries.length; i++) {
      const item = bookSeries[i];
      const bookSeriesEntity = bookSeriesRepo.create(item);
      bookSeriesEntity.publisher = await publisherRepo.findOne(item.publisherId);
      await bookSeriesRepo.save(bookSeriesEntity);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
