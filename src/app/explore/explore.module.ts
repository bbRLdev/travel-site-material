import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { environment } from 'src/environments/environment.prod';

import { ExploreComponent } from './explore.component';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ExploreComponent }]),
    SharedModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
    }),
    AgmSnazzyInfoWindowModule,
  ],
})

export class ExploreModule {}