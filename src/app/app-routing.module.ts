import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { TeamsModule } from './teams/teams.module';

const appRoutes: Routes = [
	{ path: 'teams', loadChildren: 'app/teams/teams.module#TeamsModule' }
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
