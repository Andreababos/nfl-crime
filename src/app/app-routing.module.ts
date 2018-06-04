import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { CrimeTimelineComponent } from './crime-timeline/crime-timeline.component';


const routes: Routes = [
    { path: '', component: TopCrimesComponent },
    { path: 'crimes', component: TopCrimesComponent },
    { path: 'players', component: TopPlayersComponent },
    { path: 'teams', component: TopTeamsComponent },
    { path: 'crime-timeline', component: CrimeTimelineComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}