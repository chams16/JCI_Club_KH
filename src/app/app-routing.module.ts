import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./componenet/home/home.component";
import {ContactUSComponent} from "./componenet/contact-us/contact-us.component";
import {NewsComponent} from "./componenet/news/news.component";
import {HelpComponent} from "./componenet/help/help.component";
import {CovidVaccinationComponent} from "./componenet/evenement/covid-vaccination/covid-vaccination.component";
import {BeEffectiveComponent} from "./componenet/evenement/be-effective/be-effective.component";
import {ProfessionalCareeerComponent} from "./componenet/evenement/professional-careeer/professional-careeer.component";
import {SenatairesComponent} from "./componenet/senataires/senataires.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactUSComponent},
  {path: 'news', component: NewsComponent},
  {path: 'help', component: HelpComponent},
  {path: 'covidVaccination', component: CovidVaccinationComponent},
  {path: 'beEffrctive', component: BeEffectiveComponent},
  {path: 'professionalCareer', component: ProfessionalCareeerComponent},
  {path: 'senateur', component: SenatairesComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
