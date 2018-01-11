import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './dashboard/detail/hero-detail.component';
import { WelcomeComponent } from './prelogin/welcome.component';
import { SelectionComponent } from './postlogin/selection/selection.component';
import { CounterComponent } from './postlogin/counter/counter.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, 
  // { path: 'dasboard', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'counter', component: CounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
