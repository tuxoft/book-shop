import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import { Author } from '../../../../model/author';
import { NameService } from '../../../../services/common/name.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
})
export class OrderItemsComponent implements OnInit {

  @Input()
  items: OrderItem[];

  constructor(private nameService: NameService) { }

  ngOnInit() {
  }

  getAuthorsAsString(authors: Author[]): string {
    return this.nameService.getAuthorsAsString(authors);
  }
}
