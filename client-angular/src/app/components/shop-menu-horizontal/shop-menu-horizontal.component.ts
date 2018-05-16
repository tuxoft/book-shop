import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/rest/category.service';

@Component({
  selector: 'app-shop-menu-horizontal',
  templateUrl: './shop-menu-horizontal.component.html',
  styleUrls: ['./shop-menu-horizontal.component.scss'],
})
export class ShopMenuHorizontalComponent implements OnInit {
  menuItems = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get().subscribe(items => this.menuItems = items);
  }

}
