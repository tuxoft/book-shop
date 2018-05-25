import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/rest/book.service';
import { CartService } from './services/rest/cart.service';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CheckboxModule } from 'primeng/checkbox';
import { routes } from './app.routes';
import { ButtonModule } from 'primeng/primeng';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects/index';
import { CategoryService } from './services/rest/category.service';
import { NameService } from './services/common/name.service';
import { AuthorService } from './services/rest/author.service';
import { GrowlModule } from 'primeng/growl';
import { NotificationsService } from './services/common/notification.service';
import { NotificationComponent } from './components/notification/notification.component';
import { PublisherService } from './services/rest/publisher.service';
import { BookSeriesService } from './services/rest/book-series.service';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchService } from './services/rest/search.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    HeaderMenuComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    HttpClientModule,
    CheckboxModule,
    ButtonModule,
    GrowlModule,
    StoreModule.forRoot(storeReducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [
    BookService,
    CartService,
    CategoryService,
    NameService,
    AuthorService,
    NotificationsService,
    PublisherService,
    BookSeriesService,
    SearchService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
