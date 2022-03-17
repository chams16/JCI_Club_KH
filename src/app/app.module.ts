import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenet/navbar/navbar.component';
import { HomeComponent } from './componenet/home/home.component';
import { QuoteComponent } from './componenet/main/quote/quote.component';
import { AboutComponent } from './componenet/main/about/about.component';
import { TeamComponent } from './componenet/main/team/team.component';
import { FooterComponent } from './componenet/footer/footer.component';
import { ViewComponent } from './componenet/main/view/view.component';
import { ContactUSComponent } from './componenet/contact-us/contact-us.component';
import { AboutNumbersComponent } from './componenet/main/about-numbers/about-numbers.component';
import { NewsComponent } from './componenet/news/news.component';
import { HelpComponent } from './componenet/help/help.component';
import { CovidVaccinationComponent } from './componenet/evenement/covid-vaccination/covid-vaccination.component';
import { BeEffectiveComponent } from './componenet/evenement/be-effective/be-effective.component';
import { ProfessionalCareeerComponent } from './componenet/evenement/professional-careeer/professional-careeer.component';
import { SenatairesComponent } from './componenet/senataires/senataires.component';
import { CopyrightComponent } from './componenet/footer/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuoteComponent,
    AboutComponent,
    TeamComponent,
    FooterComponent,
    ViewComponent,
    ContactUSComponent,
    AboutNumbersComponent,
    NewsComponent,
    HelpComponent,
    CovidVaccinationComponent,
    BeEffectiveComponent,
    ProfessionalCareeerComponent,
    SenatairesComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
