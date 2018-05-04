import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../../../model/models';

@Component({
  selector: 'app-cart-footer-controls',
  templateUrl: './cart-footer-controls.component.html',
  styleUrls: ['./cart-footer-controls.component.scss'],
})
export class CartFooterControlsComponent implements OnInit {

  @Input()
  selectedItems: Set<OrderItem>;

  constructor() { }

  ngOnInit() {
  }

  deleteItems() {

  }

}
