import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

@NgModule({
	imports: [
		TeamsRoutingModule,
		CommonModule,
	],
	declarations: [
		TeamsComponent,
		TeamsListComponent
	]
})
export class TeamsModule { }
