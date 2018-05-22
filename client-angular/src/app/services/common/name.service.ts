import { Injectable } from '@angular/core';
import { Author } from '../../model/author';

@Injectable()
export class NameService {

  constructor() { }

  getSurnameAndInitials(author: Author): string {
    if (author && author.name) {
      return (author.name.last ? author.name.last + ' ' : '')
        + (author.name.first ? author.name.first.substring(0, 1) + '. ' : '')
        + (author.name.middle ? author.name.middle.substring(0, 1) + '.' : '');
    }

    return '';
  }

  getAuthorsAsString(authors: Author[]): string {
    if (authors) {
      return authors
        .reduce(
          (total, author) => total === ''
            ? this.getSurnameAndInitials(author)
            : total.concat(', ', this.getSurnameAndInitials(author)),
          '');
    }

    return '';
  }

  getFullname(author: Author): string {
    if (author && author.name) {
      return author.name.last + ' '
        + author.name.first + ' '
        + author.name.middle;
    }
    return '';
  }
}
