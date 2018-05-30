import { MigrationInterface, QueryRunner } from "typeorm";
import { Book } from '../../entity/book';
import { Category } from '../../entity/category';
import { Author } from '../../entity/author';
import { Publisher } from '../../entity/publisher';
import { BookSeries } from '../../entity/bookSeries';

export class Books1526280301787 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const items = [
      {
        articul: 2062839,
        title: 'Сказки Руслан и Людмила',
        authors: [1],
        price: 534.00,
        inStock: 21,
        coverUrl: 'public/images/covers/low-resolution/cd800b0938defad3fb1f55e5b0b7538f.jpg',
        bookSeries: 1,
        publisher: 1,
        publicationYear: '2017',
        pageCount: 240,
        isbn: '9785699099580',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 500,
        dimensions: '26.3 x 20.6 x 3',
        coverType: 'Твердая глянцевая',
        ageLimit: '6+',
        description: 'В книгу гения русской литературы Александра Сергеевича Пушкина (1799 - 1836) входят пять самых известных его поэтических сказок и поэма "Руслан и...',
        categories: [61],
      },
      {
        articul: 2623501,
        title: 'Стихотворения. Поэмы. Маленькие трагедии',
        authors: [1],
        price: 186.00,
        inStock: 3,
        coverUrl: 'public/images/covers/low-resolution/43f508a36159ddda103d57c5b310195f.jpg',
        bookSeries: 2,
        publisher: 2,
        publicationYear: '2018',
        pageCount: 318,
        isbn: '9785171062842',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 2000,
        weight: 500,
        dimensions: '20.7 x 13.1 x 1.9',
        coverType: 'Твердая бумажная',
        ageLimit: '12+',
        description: 'Александр Сергеевич Пушкин (1799–1837) – великий поэт, драматург и прозаик. Его необъятное творческое наследие внесло неоценимый вклад в развитие мировой литературы и культуры. Однако считается, что именно в поэзии наиболее ярко отразился пушкинский гений, ценности и идеалы поэта. Пушкина часто называют "солнцем русской поэзии": благодаря его творчеству русская поэзия обогатилась и вышла на новый уровень. Критик Виссарион Григорьевич Белинский писал: "Пушкин был призван быть первым поэтом-художником Руси, дать ей поэзию как искусство, как художество".' +
        '<br><br>В сборник вошли основные поэтические произведения Александра Пушкина, изучение которых входит в обязательную школьную программу. Это гражданская и любовная лирика, поэмы ("Кавказский пленник", "Бахчисарайский фонтан", "Медный всадник" и другие) и цикл пьес "Маленькие трагедии".',
        categories: [50],
      },
      {
        articul: 638117,
        title: 'Дети мои.',
        authors: [2],
        price: 468.00,
        inStock: 653,
        coverUrl: 'public/images/covers/low-resolution/149c59e99c8a0a444ef6eaf9d860172d.jpg',
        bookSeries: 3,
        publisher: 3,
        publicationYear: '2018',
        pageCount: 498,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 500,
        dimensions: '218x145x27 мм',
        coverType: 'Твердая, частичная лакировка, без иллюстраций',
        ageLimit: '16+',
        description: 'Новый роман лауреата премий "Большая книга" и "Ясная Поляна", автора бестселлера "Зулейха открывает глаза"!' +
        '<br><br>' + 'Гузель Яхина - автор Тотального диктанта в 2018 году: три отрывка из нового романа "Дети мои" задействованы в одной из самых масштабных просветительских акций в России.' +
        '<br><br>' + '"Дети мои" - новый роман Гузель Яхиной, самой яркой дебютантки в истории российской литературы новейшего времени, лауреата премий "Большая книга" и "Ясная Поляна" за бестселлер "Зулейха открывает глаза".' +
        '<br><br>' + 'Поволжье, 1920-1930-е годы. Якоб Бах - российский немец, учитель в колонии Гнаденталь. Он давно отвернулся от мира, растит единственную дочь Анче на уединенном хуторе и пишет волшебные сказки, которые чудесным и трагическим образом воплощаются в реальность.' +
        '<br><br>' + '"Я хотела рассказать о мире немецкого Поволжья - ярком, самобытном, живом - о мире, когда-то созданном пришлыми людьми в чужой стране, а сегодня затерянном в прошлом. Но это еще и история о том, как большая любовь порождает страхи в нашем сердце и одновременно помогает их превозмочь". Гузель Яхина' +
        '<br><br>' + 'Об авторе: Гузель Яхина - писатель, лауреат премий "Ясная Поляна" и "Большая книга". Родилась в Казани, окончила Казанский государственный педагогический институт, сценарный факультет Московской школы кино. Дебютный роман "Зулейха открывает глаза" стал ярким событием в литературе, отмечен ведущими литературными премиями. Издан тиражом более 200 тыс. экз. и переведен на 30 языков. В 2018 года Гузель Яхина стала автором "Тотального диктанта". Три текста для разных часовых поясов, названные "Утро", "День" и "Вечер" - избранные отрывки из романа "Дети мои".' +
        '<br><br>' + 'Цитата: "Дети не боялись ничего. В их доверчивых взорах и открытых лицах Бах узнавал то же бесстрашие, что наблюдал с рождения в глазах Анче. Голоса детей были полны веры и страсти, а улыбки - любви и надежд. Движения их были свободны, радостны, и они несли эту радость и эту свободу с собой - на покровские улицы, в тесные пространства местных рабочих клубов, театров, читален. Детей не пугали рыбьи и мышиные морды взрослых - возможно, дети их попросту не замечали: они проходили сквозь чужие страхи - как через мелкий брод, оставаясь при этом сухими. Мир распадался надвое: мир испуганных взрослых и мир бесстрашных детей существовали рядом и не пересекались".' +
        '<br><br>' + 'Отзывы: "В первом романе, стремительно прославившемся и через год после дебюта жившем уже в тридцати переводах и на верху мировых литературных премий, Гузель Яхина швырнула нас в Сибирь и при этом показала татарщину в себе, и в России, и, можно сказать, во всех нас. А теперь она погружает читателя в холодную волжскую воду, в волглый мох и торф, в зыбь и слизь, в Этель-Булгу-Су, и ее "мысль народная", как Волга, глубока, и она прощупывает неметчину в себе, и в России, и, можно сказать, во всех нас. В сюжете вообще-то на первом плане любовь, смерть, и история, и политика, и война, и творчество..." Елена Костюкович',
        categories: [100, 101],
      },
      {
        articul: 497411,
        title: 'Братья. Книга 2. Царский витязь. Том 1.',
        authors: [3],
        price: 336.00,
        inStock: 65,
        coverUrl: 'public/images/covers/low-resolution/d44ac4f99e682662692ac0fd794868ad.jpg',
        bookSeries: 4,
        publisher: 4,
        publicationYear: '2015',
        pageCount: 608,
        isbn: '978-5-389-10278-1',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 600,
        dimensions: '206x136x30 мм',
        coverType: 'твердая, целлофанированная, без иллюстрация',
        ageLimit: '16+',
        description: 'Прошло семь лет после Беды - вселенской катастрофы, погрузившей весь мир в бесконечную зиму. От могущественной империи, угодившей под удар кометы, уцелела только периферия и независимые племена вдоль внешних границ. В одном из этих племён, в нищей лесной деревне, подрастает маленький царевич, чудом спасённый в момент Беды. Родительский сын становится его старшим братом, лучшим другом, защитником и героем. Однако трагические обстоятельства разлучают мальчишек. Родной сын насильственно уведён из семьи. Маленький царевич решает посвятить свою жизнь поискам и возвращению пропавшего. Но не всё так просто! Уведённый юноша попадает в своего рода школу, где умный и харизматичный учитель принимается лепить из него тайного воина - изощрённого убийцу для негласных дел...' +
        '<br>' + '"Эта книга - что-то вроде моего признания в любви к родному русскому языку. Отнюдь не занимаясь изобретением новых слов или нетривиальных истолкований, я пытаюсь хотя бы намекнуть читателю, мимо каких сокровищ родной речи мы порой бездумно проходим. Думается, жанры альтернативной истории и славянского фэнтези отлично подходят для того, чтобы писать книги по-русски, всемерно уходя от убогого канцелярита. Надеюсь, "Братья" кому-нибудь из читателей помогут задуматься, на каком языке мы думаем, пишем и говорим".' +
        '<br>' + 'Мария Семёнова',
        categories: [100],
      },
      {
        articul: 123456,
        title: 'Чисто женская тема! Что должна знать каждая дама о своем здоровье.',
        authors: [4],
        price: 430.00,
        inStock: 11,
        coverUrl: 'public/images/covers/low-resolution/7171a82862d1d4f7b6742bf6cf4593af.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [100],
      },
      {
        articul: 123456,
        title: 'Огонь и ярость',
        authors: [5],
        price: 626.00,
        inStock: 10,
        coverUrl: 'public/images/covers/low-resolution/34873331c7e3ce02d73256cd557b2e3a.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [10],
      },
      {
        articul: 123456,
        title: 'Русская пятерка',
        authors: [6],
        price: 317.00,
        inStock: 9,
        coverUrl: 'public/images/covers/low-resolution/287d89e6785281199c80c3974b2440a8.jpg',
        bookSeries: 7,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [112],
      },
      {
        articul: 123456,
        title: 'Эльфика. Другая я. Снежные сказки о любви, надежде и сбывающихся мечтах',
        authors: [7, 8],
        price: 237.00,
        inStock: 5,
        coverUrl: 'public/images/covers/low-resolution/8175db6f1ab560fd34251d38aff8e17b.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [117],
      },
      {
        articul: 123456,
        title: 'One-Punch Man. Книги 1-2',
        authors: [9, 10],
        price: 373.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/f701c318216a1ec5310ece8bb28476a3.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [478],
      },
      {
        articul: 123456,
        title: 'Пустая могила',
        authors: [11],
        price: 256.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/b9374b36b38a9e28f8d5aa528e857aa5.jpg',
        bookSeries: 7,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [216],
      },
      {
        articul: 123456,
        title: 'Death Note. Black Edition. Книга 4',
        authors: [12, 13],
        price: 540.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/3f9e851ae18ebe11abf74de98bbe3ef5.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [527],
      },
      {
        articul: 123456,
        title: 'The Sandman. Песочный человек. Книга 8. У Конца Миров',
        authors: [14],
        price: 685.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/1c90f5de8f1b4b747da5bf7f229509c6.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [782],
      },
      {
        articul: 123456,
        title: 'До встречи с тобой',
        authors: [15],
        price: 264.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/3f8acc234e8fa61062de8701d35195d1.jpg',
        bookSeries: 7,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [793],
      },
      {
        articul: 123456,
        title: 'Потерянное озеро',
        authors: [16],
        price: 243.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/31ab1fdbe004a8c4e88d05033498ee1d.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [826],
      },
      {
        articul: 123456,
        title: 'Тень и кость',
        authors: [17],
        price: 253.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/4fc61875a25aed5da72cfda3c4a0257d.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [114],
      },
      {
        articul: 123456,
        title: 'Девушка в тумане',
        authors: [18],
        price: 296.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/2c5c4d36757d7bdc0643398e5b9922d7.jpg',
        bookSeries: 7,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [120],
      },
      {
        articul: 123456,
        title: 'Женщина в окне',
        authors: [19],
        price: 296.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/790a2f15a2e8e4571bf00620b63852ea.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [217],
      },
      {
        articul: 123456,
        title: 'Несбывшийся ребенок',
        authors: [20],
        price: 269.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/834f32737525cff163d0d8c4a48ae521.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [216],
      },
      {
        articul: 123456,
        title: 'Разрешаю себя ненавидеть',
        authors: [21],
        price: 189.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/1493538039f9512df8ebfd66ef11bf03.jpg',
        bookSeries: 7,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Записки анестезиолога',
        authors: [22],
        price: 202.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/f8eb6a86e6c48011107c3770e383186b.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Метро 2035: Красный вариант',
        authors: [23],
        price: 344.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/731dc65bd3d643652848aa2225a352d3.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Экслибриум. Том 6. Бумажный порез',
        authors: [24],
        price: 297.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/804f9efd0cd268469c4dc4ccc17924a8.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Желтые розы для актрисы',
        authors: [25],
        price: 202.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/1f1ca9f4f0fd9210a54aa8ba8678b513.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Кристалл Авроры',
        authors: [26],
        price: 242.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/640a59a2063f1652debe1b91e4703d80.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Возвращение',
        authors: [27, 28],
        price: 202.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/479ac939897512bef141c8e9feb15a12.jpg',
        bookSeries: 6,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
      {
        articul: 123456,
        title: 'Легенды Bubble. Черный Пес. Свое время',
        authors: [29],
        price: 237.00,
        inStock: 6,
        coverUrl: 'public/images/covers/low-resolution/79cae30cbfd4b333dc5b4446b6fa9f07.jpg',
        bookSeries: 5,
        publisher: 5,
        publicationYear: '2018',
        pageCount: 999,
        isbn: '978-5-17-107766-2',
        udc: '123xyz',
        bbk: 'qwe456',
        circulation: 20000,
        weight: 333,
        dimensions: '111x222x33 мм',
        coverType: 'твердая, целлофанированная, без иллюстраций',
        ageLimit: '16+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ac lectus vitae venenatis. Quisque vitae posuere velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla porta est eget porta. Aenean volutpat libero faucibus nunc condimentum tincidunt. Suspendisse vel erat neque. Vestibulum at dolor vel turpis egestas varius in eu mi. Donec ut ultricies leo. Sed ex mauris, pharetra non urna ac, tristique sollicitudin purus. Proin in laoreet magna. Suspendisse nec porta lacus, id semper purus. Aliquam hendrerit ex a porttitor porta.' +
        '<br><br>' + 'Nunc consectetur eget lacus quis porta. Nunc varius ante vitae vestibulum commodo. In hendrerit nunc nulla, ac eleifend diam finibus fermentum. Ut eleifend elit quis hendrerit tincidunt. Cras iaculis, ante quis tincidunt gravida, mi neque pretium augue, vel varius felis enim vitae diam. Vestibulum et lacinia sem. Nunc blandit sagittis ipsum, et hendrerit nisi consectetur sed. Integer rhoncus, dolor vitae gravida congue, elit sem rutrum mi, sodales tempus risus tellus eget ligula.' +
        '<br><br>' + 'Donec condimentum risus id mi porttitor scelerisque. Curabitur nunc magna, tempus maximus turpis nec, posuere mollis massa. Curabitur at ligula eros. Suspendisse potenti. Maecenas felis est, laoreet at elementum nec, blandit sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc venenatis risus bibendum, venenatis odio vitae, fringilla augue. Sed lectus sem, congue eu vehicula a, rhoncus id quam. In hac habitasse platea dictumst. Aenean vulputate elementum tristique. Donec lectus elit, condimentum at elementum eu, luctus ut turpis. Integer tortor enim, efficitur id viverra at, eleifend vitae turpis. Pellentesque tempus, felis sit amet pretium vulputate, turpis nibh consequat lorem, facilisis finibus odio elit sed ex. Etiam imperdiet ullamcorper aliquam. In blandit erat eu odio lacinia pulvinar. Aliquam erat volutpat.' +
        '<br><br>' + 'Praesent posuere porttitor nisi quis feugiat. In commodo tortor non sapien sollicitudin faucibus. Sed rhoncus in elit vitae tempor. Cras maximus ullamcorper felis, ac imperdiet libero iaculis sit amet. Maecenas euismod, lectus sed feugiat convallis, arcu ex venenatis magna, sodales vestibulum velit tellus vulputate ipsum. Vivamus aliquam arcu risus, et aliquet magna efficitur vestibulum. Sed cursus nisi et mollis lacinia. Vestibulum nec libero tempus nisi consectetur maximus egestas id libero. Donec ullamcorper orci neque, non fermentum lorem placerat vel. Donec egestas sapien nulla, quis tincidunt magna sollicitudin at. Pellentesque fermentum tortor id porttitor sollicitudin.' +
        '<br><br>' + 'Fusce sit amet tellus interdum tortor dapibus euismod. Phasellus quis metus a diam malesuada eleifend in ac tellus. Morbi sagittis nisi ullamcorper nisl euismod finibus. Nulla tincidunt, erat id venenatis consectetur, ipsum metus ultricies augue, vel sagittis tellus justo sed dolor. Cras varius est arcu, sit amet accumsan eros semper a. Sed pharetra lobortis erat eget consectetur. Sed vehicula fermentum est, eget dapibus quam hendrerit in. Phasellus eget ipsum ultrices, scelerisque ipsum sit amet, eleifend sem. Cras suscipit, erat nec semper fermentum, leo ex ultrices nibh, vel ornare diam augue nec ante. Sed ultricies varius condimentum. Cras in dui id nisl euismod finibus sed vel velit. Fusce rhoncus, lectus in varius bibendum, est metus auctor magna, ac sagittis neque nulla id lacus. Mauris placerat sapien sit amet odio porta congue.',
        categories: [804],
      },
    ];

    const bookRepo = queryRunner.connection.getRepository(Book);
    const authorRepo = queryRunner.connection.getRepository(Author);
    const categoryRepo = queryRunner.connection.getRepository(Category);
    const publisherRepo = queryRunner.connection.getRepository(Publisher);
    const bookSeriesRepo = queryRunner.connection.getRepository(BookSeries);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const book = bookRepo.create({
        ...item,
        authors: await authorRepo.findByIds(item.authors),
        categories: await categoryRepo.findByIds(item.categories),
        publisher: await publisherRepo.findOne(item.publisher),
        bookSeries: await bookSeriesRepo.findOne(item.bookSeries),

      });
      await bookRepo.save(book);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
