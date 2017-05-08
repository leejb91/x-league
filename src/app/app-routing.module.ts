import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'teams', loadChildren: 'app/teams/teams.module#TeamsModule' },
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
