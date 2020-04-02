import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { TranslatorListComponent} from './components/translator-list/translator-list.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'translators', component: TranslatorListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
