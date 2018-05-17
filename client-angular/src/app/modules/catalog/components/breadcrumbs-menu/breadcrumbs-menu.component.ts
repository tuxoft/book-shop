import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../../services/rest/category.service';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'app-breadcrumbs-menu',
  templateUrl: './breadcrumbs-menu.component.html',
  styleUrls: ['./breadcrumbs-menu.component.scss'],
})
export class BreadcrumbsMenuComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _categoryId: number;

  get categoryId(): number {
    return this._categoryId;
  }

  @Input()
  set categoryId(categoryId: number) {
    console.log('value changed');
    this._categoryId = categoryId;
    if (this._categoryId) {
      this.categoryService.getPathForCategory(this._categoryId).pipe(take(1))
        .subscribe(categoryPath => this.categoryPath = categoryPath);
    }
  }

  categoryPath = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
