import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  orderForm: FormGroup;

  ngOnInit() {

  }

  createForm() {
    this.orderForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators. required],
      middleName: '',
      email: ['', Validators.email],
      phoneNumber: ['', Validators.pattern(new RegExp(`^(([0-9]){10})$`))],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      index: ['', Validators.required],
    });
  }

}
