import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { RouterModule } from '@angular/router';
import { routes } from './profile.routes';
import { TableModule } from 'primeng/table';
import { ProfileOrderDetailComponent } from './components/profile-order-detail/profile-order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
  ],
  declarations: [
    ProfilePageComponent,
    ProfileOrdersComponent,
    ProfileInfoComponent,
    ProfileMenuComponent,
    ProfileOrderDetailComponent,
  ],
})
export class ProfileModule { }
