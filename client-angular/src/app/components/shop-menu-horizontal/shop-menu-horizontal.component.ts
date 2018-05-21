import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/rest/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-menu-horizontal',
  templateUrl: './shop-menu-horizontal.component.html',
  styleUrls: ['./shop-menu-horizontal.component.scss'],
})
export class ShopMenuHorizontalComponent implements OnInit {
  menuItems = [];

  constructor(private categoryService: CategoryService, private route: Router) { }

  ngOnInit() {
    this.categoryService.get().subscribe(items => this.menuItems = items);
  }

  navigate(id: number) {
    if (id) {
      this.route.navigate(['/catalog/' + id]);

      return;
    }
    this.route.navigate(['/']);
  }
}
