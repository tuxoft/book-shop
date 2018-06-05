import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {

  url: string;
  urlSubscription: Observable<string>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        let tempRoute = route;
        while (tempRoute.firstChild) tempRoute = tempRoute.firstChild;

        return tempRoute;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.url[0].path),
    ).subscribe((path) => {
      this.url = path;
    });
  }

  ngOnInit() {
  }

}
