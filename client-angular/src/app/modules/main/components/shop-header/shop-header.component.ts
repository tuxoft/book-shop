import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss'],
})
export class ShopHeaderComponent implements OnInit {

  searchValue: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(event: any) {
    const query = event.target.value;
  }

  goToSearch(search: string) {
    this.router.navigate(['/search'], { queryParams: { q: search } });
  }
}
