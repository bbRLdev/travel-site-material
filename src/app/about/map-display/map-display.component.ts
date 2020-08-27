import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-display',
  styles: [`
    agm-map {
      height: 600px;
    }
  `],
  template: `
  <mat-card style="margin-bottom: 2rem;">
    <agm-map style="height: 600px" [latitude]="51.673858" [longitude]="7.815982">
      <agm-marker [latitude]="51.673858" [longitude]="7.815982">
        <agm-snazzy-info-window [maxWidth]="200" [closeWhenOthersOpen]="true">
          <ng-template>
            My first Snazzy Info Window!
          </ng-template>
        </agm-snazzy-info-window>
      </agm-marker>
    </agm-map>
  </mat-card>
  `
})
export class MapDisplayComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
