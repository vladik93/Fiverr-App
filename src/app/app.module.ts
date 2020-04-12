import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { FeatureTranslatorComponent } from './components/feature-translator/feature-translator.component';
import { HighlightLanguageComponent } from './components/highlight-language/highlight-language.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { FooterComponent } from './footer/footer.component';
import { TranslatorListComponent } from './components/translator-list/translator-list.component';
import { TranslatorPageComponent } from './components/translator-page/translator-page.component';



import { LanguageService } from './services/language.service';
import { TranslatorService } from './services/translator.service';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    LanguageMenuComponent,
    FeatureTranslatorComponent,
    ReviewModalComponent,
    HighlightLanguageComponent,
    FooterComponent,
    TranslatorListComponent,
    HomePageComponent,
    TranslatorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // NGX-BOOTSTRAP COMPONENTS
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    LanguageService,
    TranslatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
