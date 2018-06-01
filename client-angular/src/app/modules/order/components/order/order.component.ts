import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from '../../../../model/order';
import { UserService } from '../../../../services/rest/user.service';
import { NotificationsService } from '../../../../services/common/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private notificationService: NotificationsService,
              private router: Router) {
    this.createForm();
  }

  orderForm: FormGroup;

  order: Order = {};

  ngOnInit() {
  }

  createForm() {
    this.orderForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: '',
      email: ['', Validators.email],
      phoneNumber: ['', Validators.pattern(new RegExp(`^(([0-9]){10})$`))],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      index: ['', Validators.required],
    });
  }

  onSubmit() {
    this.order = this.prepareSaveOrder();
    this.userService.createOrder(this.order).subscribe(
      (success) => {
        this.router.navigate(['/order/success', success.id]);
      },
      (error) => {
        let errorMsg = '';
        if (error && error.error && error.status === 422) {
          errorMsg = error.error.reduce(
            (prevValue, curValue) => {
              return prevValue + Object.values(curValue.constraints)
                .reduce(
                  (constrAccum, curConstr) => {
                    return (constrAccum as string) + (curConstr as string) + '\n';
                  },
                  '');
            },
            '');
        }

        if (error && error.error && error.status === 500) {
          errorMsg = error.error;
        }
        this.notificationService.notify('error', '',
                                        'Произошла ошибка при сохранении заказа:' + errorMsg);
      },
    );
  }

  prepareSaveOrder(): Order {
    const formModel = this.orderForm.value;

    const saveOrder: Order = {
      ...this.order,
      addresseeName: {
        first: formModel.firstName,
        middle: formModel.middleName,
        last: formModel.lastName,
      },
      email: formModel.email,
      phoneNumber: formModel.phoneNumber,
      shippingAddress: {
        country: formModel.country,
        city: formModel.city,
        street: formModel.street,
        index: formModel.index,
      },
    };

    return saveOrder;
  }
}
