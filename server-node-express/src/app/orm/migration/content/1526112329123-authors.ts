import { MigrationInterface, QueryRunner } from "typeorm";
import { Author } from '../../entity/author';

export class Authors1526112329123 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const items: Author[] = [{
      id: 1,
      name: {
        first: 'Александр',
        middle: 'Сергеевич',
        last: 'Пушкин',
      },
    }, {
      id: 2,
      name: {
        first: 'Гузель',
        middle: 'Шамилевна',
        last: 'Яхина',
      },
    }, {
      id: 3,
      name: {
        first: 'Мария',
        middle: 'Сергеевна',
        last: 'Семенова',
      },
    }, {
      id: 4,
      name: {
        first: 'Елена',
        middle: 'Александровна',
        last: 'Макарова',
      },
    }, {
      id: 5,
      name: {
        first: 'М',
        middle: 'К',
        last: 'Вольф',
      },
    }, {
      id: 6,
      name: {
        first: 'Гейв К.Р.',
        last: 'Гейв',
      },
    }, {
      id: 7,
      name: {
        first: 'Ирина',
        middle: 'Леонидовна',
        last: 'Семина',
      },
    }, {
      id: 8,
      name: {
        first: 'Надежда',
        middle: 'Александровна',
        last: 'Кулибова',
      },
    }, {
      id: 9,
      name: {
        first: 'One',
      },
    }, {
      id: 10,
      name: {
        first: 'Руслан',
        last: 'Мурата',
      },
    }, {
      id: 11,
      name: {
        first: 'Людмила',
        last: 'Страуд',
      },
    }, {
      id: 12,
      name: {
        first: 'Ооба',
        last: 'Цугуми',
      },
    }, {
      id: 13,
      name: {
        first: 'Обата',
        last: 'Такэси',
      },
    }, {
      id: 14,
      name: {
        first: 'Н.',
        last: 'Гейман',
      },
    }, {
      id: 15,
      name: {
        first: 'Дж.',
        last: 'Мойес',
      },
    }, {
      id: 16,
      name: {
        first: 'С.',
        last: 'Аллен',
      },
    }, {
      id: 17,
      name: {
        first: 'Л',
        middle: '',
        last: 'Бардуго',
      },
    }, {
      id: 18,
      name: {
        first: 'Д.',
        middle: '',
        last: 'Карризи',
      },
    }, {
      id: 19,
      name: {
        first: 'Дж.',
        middle: 'А.',
        last: 'Финн',
      },
    }, {
      id: 20,
      name: {
        first: 'К.',
        middle: '',
        last: 'Чиджи',
      },
    }, {
      id: 21,
      name: {
        first: 'Юлия',
        middle: 'Владимировна',
        last: 'Колесникова',
      },
    }, {
      id: 22,
      name: {
        first: 'Александр',
        middle: 'Александрович',
        last: 'Иванов',
      },
    }, {
      id: 23,
      name: {
        first: 'Сергей',
        middle: 'Александрович',
        last: 'Недоруб',
      },
    }, {
      id: 24,
      name: {
        first: 'Н.',
        middle: '',
        last: 'Девова',
      },
    }, {
      id: 25,
      name: {
        first: 'Лариса',
        middle: 'Петровна',
        last: 'Соболева',
      },
    }, {
      id: 26,
      name: {
        first: 'Алиса',
        middle: 'Венедиктовна',
        last: 'Берсенева',
      },
    }, {
      id: 27,
      name: {
        first: 'Дмитрий',
        middle: 'Геннадьевич',
        last: 'Зурков',
      },
    }, {
      id: 28,
      name: {
        first: 'Игорь',
        middle: 'Борисович',
        last: 'Черепнев',
      },
    }, {
      id: 29,
      name: {
        first: 'Александр',
        middle: 'Викторович',
        last: 'Волков',
      },
    }];

    const authorRepo = queryRunner.connection.getRepository(Author);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const author = authorRepo.create(item);
      await authorRepo.save(author);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
