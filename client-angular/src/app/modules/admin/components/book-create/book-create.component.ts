import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BookService } from '../../../../services/rest/book.service';
import { StoreState } from '../../../../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { Book } from '../../../../model/book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author } from '../../../../model/author';
import { AuthorService } from '../../../../services/rest/author.service';
import { NameService } from '../../../../services/common/name.service';
import { NotificationsService } from '../../../../services/common/notification.service';
import { Publisher } from '../../../../model/publisher';
import { PublisherService } from '../../../../services/rest/publisher.service';
import { BookSeriesService } from '../../../../services/rest/book-series.service';
import { BookSeries } from '../../../../model/book-series';
import { TreeNode } from 'primeng/api';
import { CategoryService } from '../../../../services/rest/category.service';
import { Category } from '../../../../model/category';
import { UploadService } from '../../../../services/rest/upload.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookCreateComponent implements OnInit {
  @ViewChild('fileUploader')
  fileUploader: any;

  bookId: number;
  book: Book = {};
  categoryId: number;
  categoryId$: Observable<number>;
  bookForm: FormGroup;
  authors$: Observable<Author[]>;
  authors: Author[];
  authorsWithFullname: any[];
  authorsSearchResult: any[];
  publisher$: Observable<Publisher[]>;
  publishers: Publisher[];
  publisherSearchResult: Publisher[];
  bookSeries: BookSeries[];
  bookSeries$: Observable<BookSeries[]>;
  bookSeriesSearchResult: BookSeries[];
  categories$: Observable<Category[]>;
  categories: Category[];
  categoryNodes: TreeNode[];
  selectedCategoryNodes: TreeNode[];
  fileToUpload: File = null;

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private fb: FormBuilder,
              private nameService: NameService,
              private notificationService: NotificationsService,
              private publisherService: PublisherService,
              private bookSeriesService: BookSeriesService,
              private categoryService: CategoryService,
              private fileUploadService: UploadService) {

    this.authors$ = this.authorService.get();
    this.authors$.subscribe((authors) => {
      this.authors = authors;
      this.authorsWithFullname = authors.map(author =>
        Object.assign(author, { fullname: this.nameService.getFullname(author) }));
    });

    this.publisher$ = this.publisherService.get();
    this.publisher$.subscribe((publisher) => {
      this.publishers = publisher;
    });

    this.bookSeries$ = this.bookSeriesService.get();
    this.bookSeries$.subscribe((bookSeries) => {
      this.bookSeries = bookSeries;
    });

    this.categories$ = this.categoryService.get();
    this.categories$.subscribe((categories) => {
      this.categories = categories;
      this.categoryNodes = this.categories.map(category => this.mapTreeNodes(category, null));
    });

    this.createForm();
  }

  uploadedFiles: any[] = [];

  uploadFileToActivity($event: any) {
    this.fileUploadService.postFile($event.files[0]).subscribe(
      (data) => {
        this.notificationService.notify('success', '', 'Обложка успешно загружена');
        this.bookForm.patchValue({
          cover: data.cover,
          coverUrl: data.coverUrl,
        });
        this.bookForm.markAsDirty();
        this.uploadedFiles.push($event.files[0]);

        return data;
      },
      (error) => {
        this.notificationService.notify('error', '', 'Произошла ошибка при загрузке');
      });
  }

  ngOnInit() {
  }

  mapTreeNodes(category: Category, parent: TreeNode): TreeNode {
    const node = {} as TreeNode;
    node.data = {
      id: category.id,
      name: category.name,
    };

    if (category.children && category.children.length) {
      node.children = category.children.map(category => this.mapTreeNodes(category, node));
    } else {
      node.children = [];
    }

    node.parent = parent;
    return node;
  }

  findInTreeNode(node: TreeNode, id: number): TreeNode {
    if (node.data.id === id) {
      return node;
    }

    if (node.children && node.children.length) {
      let result = null;
      node.children.some((node) => {
        result = this.findInTreeNode(node, id);
        if (result) {
          if (node.data.id !== id) {
            node.partialSelected = true;
            node.expanded = true;
          }
          return true;
        }
        return false;
      });
      return result;
    }

    return null;
  }

  searchAuthors(event) {
    this.authorsSearchResult = this.authorsWithFullname
      .filter(author => author.fullname.indexOf(event.query) > -1);
  }

  searchPublisher(event) {
    this.publisherSearchResult = this.publishers
      .filter(publisher => publisher.name.indexOf(event.query) > -1);
  }

  searchBookSeries(event) {
    this.bookSeriesSearchResult = this.bookSeries
      .filter(bookSeries => bookSeries.name.indexOf(event.query) > -1);
  }

  nodeSelect(event) {
    this.bookForm.markAsDirty();
  }

  createForm() {
    this.bookForm = this.fb.group({
      authors: [],
      publisher: [{}, Validators.required],
      bookSeries: {},
      categories: [],
      bbk: '',
      title: '',
      isbn: '',
      udc: '',
      circulation: '',
      coverType: '',
      dimensions: '',
      inStock: '',
      pageCount: '',
      price: '',
      weight: '',
      publicationYear: '',
      articul: '',
      ageLimit: '',
      cover: '',
      coverUrl: '',
      description: '',
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.bookForm.reset({
      title: this.book.title,
      authors: this.book.authors.map(author =>
        Object.assign(author, { fullname: this.nameService.getFullname(author) })),
      publisher: this.book.publisher,
      bookSeries: this.book.bookSeries,
      categories: [],
      bbk: this.book.bbk,
      udc: this.book.udc,
      isbn: this.book.isbn,
      circulation: this.book.circulation,
      coverType: this.book.coverType,
      dimensions: this.book.dimensions,
      inStock: this.book.inStock,
      pageCount: this.book.pageCount,
      price: this.book.price,
      weight: this.book.weight,
      publicationYear: this.book.publicationYear,
      articul: this.book.articul,
      ageLimit: this.book.ageLimit,
      cover: this.book.cover,
      coverUrl: this.book.coverUrl,
      description: this.book.description,
    });
    this.clearUploads();
  }

  clearUploads() {
    this.uploadedFiles = [];
    this.fileUploader.clear();
  }

  onSubmit() {
    this.book = this.prepareSaveBook();
    this.bookService.updateBook(this.book).subscribe(
      (success) => {
        this.notificationService.notify('success', '', 'Книга успешно сохранена');
      },
      (error) => {
        let errorMsg = '';
        if (error && error.error && error.status === 422) {
          errorMsg = error.error.reduce(
            (prevValue, curValue) => {
              return prevValue + Object.values(curValue.constraints)
                .reduce(
                  (constrAccum, curConstr) => {
                    return (constrAccum as string) + (curConstr as string) + '\n';
                  },
                  '');
            },
            '');
        }

        if (error && error.error && error.status === 500) {
          errorMsg = error.error;
        }
        this.notificationService.notify('error', '',
                                        'Произошла ошибка при сохранении книги:' + errorMsg);
      },
    );
    this.rebuildForm();
  }

  prepareSaveBook(): Book {
    const formModel = this.bookForm.value;

    const saveBook: Book = {
      ...this.book,
      title: formModel.title,
      authors: formModel.authors.map((author) => {
        delete author.fullname;
        return author;
      }),
      bbk: formModel.bbk,
      publisher: formModel.publisher,
      bookSeries: formModel.bookSeries,
      categories: this.selectedCategoryNodes.map((node) => { return { id: node.data.id }; }),
      udc: formModel.udc,
      isbn: formModel.isbn,
      circulation: formModel.circulation,
      coverType: formModel.coverType,
      dimensions: formModel.dimensions,
      inStock: formModel.inStock,
      pageCount: formModel.pageCount,
      price: formModel.price,
      weight: formModel.weight,
      publicationYear: formModel.publicationYear,
      articul: formModel.articul,
      ageLimit: formModel.ageLimit,
      cover: formModel.cover,
      coverUrl: formModel.coverUrl,
      description: formModel.description,
    };

    return saveBook;
  }

  revert() {
    this.rebuildForm();
  }
}
