import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../services/rest/category.service';

@Component({
  selector: 'app-product-wide-card',
  templateUrl: './product-wide-card.component.html',
  styleUrls: ['./product-wide-card.component.scss'],
})
export class ProductWideCardComponent implements OnInit {

  categoryId: number;

  @Input()
  product: any;

  constructor() {
  }

  ngOnInit() {
  }

}
