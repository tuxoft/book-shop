import { MigrationInterface, QueryRunner } from 'typeorm';
import { BookEntity } from '../../entity/book';

export class BookContent1525339433574 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.connection.createQueryBuilder()
      .insert()
      .into(BookEntity)
      .values([
        {
          title: 'Дети мои.',
          authors: ['Яхина Г.Т.'],
          price: '468 р.',
          coverUrl: 'public/images/covers/149c59e99c8a0a444ef6eaf9d860172d.jpg',
        },
        {
          title: 'Братья. Книга 2. Царский витязь. Том 1.',
          authors: ['Семенова М.С.'],
          price: '336 р.',
          coverUrl: 'public/images/covers/d44ac4f99e682662692ac0fd794868ad.jpg',
        },
        {
          title: 'Чисто женская тема! Что должна знать каждая дама о своем здоровье.',
          authors: ['Макарова Е.А.'],
          price: '430 р.',
          coverUrl: 'public/images/covers/7171a82862d1d4f7b6742bf6cf4593af.jpg',
        },
        {
          title: 'Огонь и ярость',
          authors: ['Вольф М.К.'],
          price: '626 р.',
          coverUrl: 'public/images/covers/34873331c7e3ce02d73256cd557b2e3a.jpg',
        },
        {
          title: 'Русская пятерка',
          authors: ['Гейв К.Р.'],
          price: '317 р.',
          coverUrl: 'public/images/covers/287d89e6785281199c80c3974b2440a8.jpg',
        },
        {
          title: 'Эльфика. Другая я. Снежные сказки о любви, надежде и сбывающихся мечтах',
          authors: ['Семина И.Л', 'Кулибова Н.А.'],
          price: '237 р.',
          coverUrl: 'public/images/covers/8175db6f1ab560fd34251d38aff8e17b.jpg',
        },
        {
          title: 'One-Punch Man. Книги 1-2',
          authors: ['One', 'Мурата Ю.'],
          price: '373 р.',
          coverUrl: 'public/images/covers/f701c318216a1ec5310ece8bb28476a3.jpg',
        },
        {
          title: 'Пустая могила',
          authors: ['Страуд Дж.'],
          price: '256 р.',
          coverUrl: 'public/images/covers/b9374b36b38a9e28f8d5aa528e857aa5.jpg',
        },
        {
          title: 'Death Note. Black Edition. Книга 4',
          authors: ['Цугуми Ооба', 'Такэси Обата'],
          price: '540 р.',
          coverUrl: 'public/images/covers/3f9e851ae18ebe11abf74de98bbe3ef5.jpg',
        },
        {
          title: 'The Sandman. Песочный человек. Книга 8. У Конца Миров',
          authors: ['Гейман Н.'],
          price: '685 р.',
          coverUrl: 'public/images/covers/1c90f5de8f1b4b747da5bf7f229509c6.jpg',
        },
        {
          title: 'До встречи с тобой',
          authors: ['Мойес Дж.'],
          price: '264 р.',
          coverUrl: 'public/images/covers/3f8acc234e8fa61062de8701d35195d1.jpg',
        },
        {
          title: 'Потерянное озеро',
          authors: ['Аллен С.'],
          price: '243 р.',
          coverUrl: 'public/images/covers/31ab1fdbe004a8c4e88d05033498ee1d.jpg',
        },
        {
          title: 'Тень и кость',
          authors: ['Бардуго Л.'],
          price: '253 р.',
          coverUrl: 'public/images/covers/4fc61875a25aed5da72cfda3c4a0257d.jpg',
        },
        {
          title: 'Девушка в тумане',
          authors: ['Карризи Д.'],
          price: '296 р.',
          coverUrl: 'public/images/covers/2c5c4d36757d7bdc0643398e5b9922d7.jpg',
        },
        {
          title: 'Женщина в окне',
          authors: ['Финн А. Дж.'],
          price: '296 р.',
          coverUrl: 'public/images/covers/790a2f15a2e8e4571bf00620b63852ea.jpg',
        },
        {
          title: 'Несбывшийся ребенок',
          authors: ['Чиджи К.'],
          price: '269 р.',
          coverUrl: 'public/images/covers/834f32737525cff163d0d8c4a48ae521.jpg',
        },
        {
          title: 'Разрешаю себя ненавидеть',
          authors: ['Колесникова Ю.'],
          price: '189 р.',
          coverUrl: 'public/images/covers/1493538039f9512df8ebfd66ef11bf03.jpg',
        },
        {
          title: 'Записки анестезиолога',
          authors: ['Иванов А.'],
          price: '202 р.',
          coverUrl: 'public/images/covers/f8eb6a86e6c48011107c3770e383186b.jpg',
        },
        {
          title: 'Метро 2035: Красный вариант',
          authors: ['Недоруб С.'],
          price: '344 р.',
          coverUrl: 'public/images/covers/731dc65bd3d643652848aa2225a352d3.jpg',
        },
        {
          title: 'Экслибриум. Том 6. Бумажный порез',
          authors: ['Девова Н.'],
          price: '297 р.',
          coverUrl: 'public/images/covers/804f9efd0cd268469c4dc4ccc17924a8.jpg',
        },
        {
          title: 'Желтые розы для актрисы',
          authors: ['Соболева Л.'],
          price: '202 р.',
          coverUrl: 'public/images/covers/1f1ca9f4f0fd9210a54aa8ba8678b513.jpg',
        },
        {
          title: 'Кристалл Авроры',
          authors: ['Берсенева А.'],
          price: '242 р.',
          coverUrl: 'public/images/covers/640a59a2063f1652debe1b91e4703d80.jpg',
        },
        {
          title: 'Возвращение',
          authors: ['Зурков Д.', 'Черепнев И.'],
          price: '202 р.',
          coverUrl: 'public/images/covers/479ac939897512bef141c8e9feb15a12.jpg',
        },
        {
          title: 'Легенды Bubble. Черный Пес. Свое время',
          authors: ['Волков А.'],
          price: '237 р.',
          coverUrl: 'public/images/covers/79cae30cbfd4b333dc5b4446b6fa9f07.jpg',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }
}
