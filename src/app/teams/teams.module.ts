import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
	imports: [
		CommonModule,
		TeamsRoutingModule
	],
	declarations: [TeamListComponent],
	exports: [TeamsModule]
})
export class TeamsModule { }
