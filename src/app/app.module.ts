import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { AdsModalComponent } from './components/ads-modal/ads-modal.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


// Authenticated Components
import { LoggedComponent } from './components/logged/logged.component';

// Guards
import { AuthGuard } from './guards/auth.guard';


import { LanguageService } from './services/language.service';
import { TranslatorService } from './services/translator.service';
import { AdService } from './services/ad.service';
import { AuthService } from './services/auth.service';
import { EmailService } from './services/email.service';
import { TokenInterceptorService } from './services/token-interceptor.service';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    AdsModalComponent,
    RegisterComponent,
    LoginComponent,
    LoggedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // NGX-BOOTSTRAP COMPONENTS
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    LanguageService,
    TranslatorService,
    AdService,
    AuthService,
    EmailService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
