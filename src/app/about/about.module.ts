import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { GreetingDisplayComponent } from './greeting-display/greeting-display.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DestinationDisplayComponent } from './destination-display/destination-display.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [AboutComponent, GreetingDisplayComponent, DestinationDisplayComponent, MapDisplayComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
    SharedModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
    }),
    AgmSnazzyInfoWindowModule,
  ]
})
export class AboutModule { }
