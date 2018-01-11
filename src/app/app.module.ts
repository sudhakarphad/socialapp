import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './_services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './dashboard/detail/hero-detail.component';
import { HeroSearchComponent } from './hero/search/hero-search.component';
import { WelcomeComponent } from './prelogin/welcome.component';
import { SelectionComponent } from './postlogin/selection/selection.component';
import { CounterComponent } from './postlogin/counter/counter.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';
//  import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // BrowserAnimationsModule,  
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
 
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    WelcomeComponent,
    SelectionComponent, CounterComponent
    // MatButtonModule, MatCheckboxModule, MatRadioModule 
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
