import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../../services/rest/category.service';
import { take } from 'rxjs/operators/take';
import { Router } from '@angular/router';

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

  categoryPath = [];

  @Input()
  set categoryId(categoryId: number) {
    this._categoryId = categoryId;
    if (this._categoryId && (this._categoryId !== -1)) {
      this.categoryService.getPathForCategory(this._categoryId).pipe(take(1))
        .subscribe(categoryPath => this.categoryPath = categoryPath);
    } else if (this._categoryId === -1) {
      this.categoryPath = [-1];
    }
  }

  constructor(private categoryService: CategoryService, private route: Router) { }

  ngOnInit() {
  }

  navigate(id: number) {
    if (id) {
      this.route.navigate(['/catalog/' + id]);

      return;
    }
    this.route.navigate(['/']);
  }

  isSearchResults(id: number) {
    return id === -1;
  }
}
