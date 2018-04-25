import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1524645522934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `city` (`id` int NOT NULL AUTO_INCREMENT, `deleted` tinyint NOT NULL, `name` varchar(255) NOT NULL, `codeName` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `publisher` (`id` int NOT NULL AUTO_INCREMENT, `deleted` tinyint NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `language` (`id` int NOT NULL AUTO_INCREMENT, `deleted` tinyint NOT NULL, `name` varchar(255) NOT NULL, `codeName` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book_series` (`id` int NOT NULL AUTO_INCREMENT, `deleted` tinyint NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(500) NOT NULL, `subtitle` text NOT NULL, `edition` int NOT NULL, `ISBN` varchar(255) NOT NULL, `UDC` varchar(255) NOT NULL, `BBK` varchar(255) NOT NULL, `cutterCode` varchar(255) NOT NULL, `publicationYear` datetime NOT NULL, `circulation` int NOT NULL, `price` int NOT NULL, `inStock` int NOT NULL, `coverUrl` varchar(255) NOT NULL, `publisherId` int NULL, `cityId` int NULL, `languageId` int NULL, `bookSeriesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book_author` (`id` int NOT NULL AUTO_INCREMENT, `posititon` int NOT NULL, `author_id` int NULL, `book_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `middleName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `photo` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(500) NOT NULL, `description` text NOT NULL, `filename` varchar(255) NOT NULL, `views` int NOT NULL, `isPublished` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category_books_book` (`categoryId` int NOT NULL, `bookId` int NOT NULL, PRIMARY KEY (`categoryId`, `bookId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `book` ADD CONSTRAINT `FK_b8988524dd01b5dcb67b4b3ede7` FOREIGN KEY (`publisherId`) REFERENCES `publisher`(`id`)");
        await queryRunner.query("ALTER TABLE `book` ADD CONSTRAINT `FK_60b121a11742f33278eb6615cb0` FOREIGN KEY (`cityId`) REFERENCES `city`(`id`)");
        await queryRunner.query("ALTER TABLE `book` ADD CONSTRAINT `FK_a1d1140264d98ba83fa11de0da1` FOREIGN KEY (`languageId`) REFERENCES `language`(`id`)");
        await queryRunner.query("ALTER TABLE `book` ADD CONSTRAINT `FK_dd678836daa9ca2e9c94c4a427d` FOREIGN KEY (`bookSeriesId`) REFERENCES `book_series`(`id`)");
        await queryRunner.query("ALTER TABLE `book_author` ADD CONSTRAINT `FK_51dabed37e04e81c0b7703d7ad4` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`)");
        await queryRunner.query("ALTER TABLE `book_author` ADD CONSTRAINT `FK_01af769e5879705bc5035b731c7` FOREIGN KEY (`book_id`) REFERENCES `book`(`id`)");
        await queryRunner.query("ALTER TABLE `category_books_book` ADD CONSTRAINT `FK_c91e15c7afdefb644e19eefc066` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`)");
        await queryRunner.query("ALTER TABLE `category_books_book` ADD CONSTRAINT `FK_b2ac429a6afcd2495c59b27e845` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `category_books_book` DROP FOREIGN KEY `FK_b2ac429a6afcd2495c59b27e845`");
        await queryRunner.query("ALTER TABLE `category_books_book` DROP FOREIGN KEY `FK_c91e15c7afdefb644e19eefc066`");
        await queryRunner.query("ALTER TABLE `book_author` DROP FOREIGN KEY `FK_01af769e5879705bc5035b731c7`");
        await queryRunner.query("ALTER TABLE `book_author` DROP FOREIGN KEY `FK_51dabed37e04e81c0b7703d7ad4`");
        await queryRunner.query("ALTER TABLE `book` DROP FOREIGN KEY `FK_dd678836daa9ca2e9c94c4a427d`");
        await queryRunner.query("ALTER TABLE `book` DROP FOREIGN KEY `FK_a1d1140264d98ba83fa11de0da1`");
        await queryRunner.query("ALTER TABLE `book` DROP FOREIGN KEY `FK_60b121a11742f33278eb6615cb0`");
        await queryRunner.query("ALTER TABLE `book` DROP FOREIGN KEY `FK_b8988524dd01b5dcb67b4b3ede7`");
        await queryRunner.query("DROP TABLE `category_books_book`");
        await queryRunner.query("DROP TABLE `photo`");
        await queryRunner.query("DROP TABLE `author`");
        await queryRunner.query("DROP TABLE `book_author`");
        await queryRunner.query("DROP TABLE `book`");
        await queryRunner.query("DROP TABLE `category`");
        await queryRunner.query("DROP TABLE `book_series`");
        await queryRunner.query("DROP TABLE `language`");
        await queryRunner.query("DROP TABLE `publisher`");
        await queryRunner.query("DROP TABLE `city`");
    }

}
