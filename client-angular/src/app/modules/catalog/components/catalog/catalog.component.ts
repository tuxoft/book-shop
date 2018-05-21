import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../services/rest/category.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {

  categoryId: number;
  products = [];

  constructor(route: ActivatedRoute, private categoryService: CategoryService) {
    this.categoryId = route.snapshot.params['id'];
    route.params.subscribe((value) => {
      this.categoryId = route.snapshot.params['id'];
      this.categoryService.getById(this.categoryId).subscribe(items => this.products = items);
    });
  }

  ngOnInit() {
  }
}
