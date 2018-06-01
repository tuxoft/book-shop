import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';
import { AppAuthGuard } from './services/auth/auth-guard';
import { TokenInterceptor } from './services/auth/token-interceptor';
import { AuthService } from './services/auth/auth-service';
import { UserService } from './services/rest/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    HeaderMenuComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
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
    KeycloakAngularModule,
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
    AuthService,
    UserService,
    AppAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
