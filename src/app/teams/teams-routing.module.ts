import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeamsListComponent } from './teams-list/teams-list.component';

const appRoutes: Routes = [
	{ path: '', component: TeamsListComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class TeamsRoutingModule { }
