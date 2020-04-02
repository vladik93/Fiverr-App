import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { FeatureTranslatorComponent } from './components/feature-translator/feature-translator.component';
import { HighlightLanguageComponent } from './components/highlight-language/highlight-language.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { FooterComponent } from './footer/footer.component';
import { TranslatorListComponent } from './components/translator-list/translator-list.component';



import { LanguageService } from './services/language.service';
import { TranslatorService } from './services/translator.service';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageMenuComponent,
    FeatureTranslatorComponent,
    ReviewModalComponent,
    HighlightLanguageComponent,
    FooterComponent,
    TranslatorListComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // NGX-BOOTSTRAP COMPONENTS
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [
    LanguageService,
    TranslatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
