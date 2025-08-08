import { Component } from '@angular/core';
import { RadioPlayerComponent } from './components/radio-player/radio-player.component';
import { StationListComponent } from './components/station-list/station-list.component';
import { CommonModule } from '@angular/common';
import { RadioStation } from './models/station.model';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RadioPlayerComponent,
    StationListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedStation!: RadioStation;

  constructor() {
    // Temporal: puedes cambiarlo cuando conectes con StationService
    this.selectedStation = {
      name: 'Radio Tiempo',
      city: 'Barranquilla',
      dial: '96.1 FM',
      category: 'Juveniles',
      logoUrl: 'assets/logos/radiotiempo_baq.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RT_BARRANQUILLAAAC.aac?dist=oro_web',
    };
  }

  onStationSelected(station: RadioStation) {
    this.selectedStation = station;
  }
}