import { Component, OnInit } from '@angular/core';
import { StoreState } from './store/reducers';
import * as CartActions from './store/cart/cart.actions';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private store: Store<StoreState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {}

  ngOnInit() {
    this.store.dispatch(new CartActions.InitCart());
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        let tempRoute = route;
        while (tempRoute.firstChild) tempRoute = tempRoute.firstChild;

        return tempRoute;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(event['title']));
  }

  isAdminPanel(): boolean {
    return this.router.url.indexOf('/admin') === 0;
  }
}
