import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-shop-menu-horizontal',
  templateUrl: './shop-menu-horizontal.component.html',
  styleUrls: ['./shop-menu-horizontal.component.scss'],
})
export class ShopMenuHorizontalComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Каталог', icon: 'fa fa-bars',
        items: [
          {
            label: 'Книги',
            icon: 'fa fa-book',
            routerLink: [''],
          },
          {
            label: 'Журналы',
          },
        ],
      },
    ];
  }

}
