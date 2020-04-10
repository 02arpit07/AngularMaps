import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaps';
  latitude = '30.355341260114507';
  longitude = '76.78043489478274';

  onLocation(event) {
    this.longitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
