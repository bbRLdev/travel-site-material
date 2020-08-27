import { Component } from '@angular/core';

@Component({
  selector: 'app-map-display',
  styles: [`
    agm-map {
      height: 600px;
    }
  `],
  templateUrl: './map-display.component.html'
})
export class MapDisplayComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
