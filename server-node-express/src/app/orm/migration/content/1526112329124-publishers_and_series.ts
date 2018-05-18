import { MigrationInterface, QueryRunner } from "typeorm";
import { Publisher } from '../../entity/publisher';
import { BookSeries } from '../../entity/bookSeries';

export class Authors1526112329123 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const publishers = [
      { id: 1, name: 'Эксмо' },
      { id: 2, name: 'АСТ' },
      { id: 3, name: 'Редакция Елены Шубиной' },
      { id: 4, name: 'Азбука' },
      { id: 5, name: 'Какой-то издатель' },
    ];

    const bookSeries = [
      { id: 1, name: 'Классика', publisher: 1 },
      { id: 2, name: 'Классика для школьников', publisher: 2 },
      { id: 3, name: 'Проза Гузель Яхиной', publisher: 3 },
      { id: 4, name: 'Миры Марии Семеновой', publisher: 4 },
      { id: 5, name: 'Какая-то серия', publisher: 5 },
      { id: 6, name: 'Еще Какая-то серия', publisher: 5 },
      { id: 7, name: 'Ну и еще одна серия', publisher: 5 },
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
      bookSeriesEntity.publisher = await publisherRepo.findOne(item.publisher);
      await bookSeriesRepo.save(bookSeriesEntity);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
