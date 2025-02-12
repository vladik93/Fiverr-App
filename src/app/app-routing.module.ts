import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { TranslatorListComponent} from './components/translator-list/translator-list.component';
import { TranslatorPageComponent } from './components/translator-page/translator-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoggedComponent } from './components/logged/logged.component';
import { AccountReconfirmComponent } from './components/account-reconfirm/account-reconfirm.component';


import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'translators', component: TranslatorListComponent, pathMatch: 'full' },
  { path: 'translators/:id', component: TranslatorPageComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'logged', component: LoggedComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'reconfirm', component: AccountReconfirmComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
