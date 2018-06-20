import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheckoutService {
  private checkoutUrl = 'api/checkout';

  constructor(private http: HttpClient) { }

  createPayment(orderId: number): Observable<any> {
    return this.http.post<any>(this.checkoutUrl, { id: orderId });
  }
}
