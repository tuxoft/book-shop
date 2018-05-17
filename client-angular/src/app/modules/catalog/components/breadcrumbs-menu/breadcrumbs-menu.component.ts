import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../../services/rest/category.service';

@Component({
  selector: 'app-breadcrumbs-menu',
  templateUrl: './breadcrumbs-menu.component.html',
  styleUrls: ['./breadcrumbs-menu.component.scss'],
})
export class BreadcrumbsMenuComponent implements OnInit {

  @Input()
  categoryId: number;

  categoryPath = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    if (this.categoryId) {
      this.categoryService.getPathForCategory(this.categoryId)
        .subscribe(categoryPath => this.categoryPath = categoryPath);
    }
  }

}
