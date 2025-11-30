import { Component, OnInit } from '@angular/core';
import { RadioPlayerComponent } from './components/radio-player/radio-player.component';
import { StationListComponent } from './components/station-list/station-list.component';
import { CountryMenuComponent } from './components/country-menu/country-menu.component';
import { AdsBannerComponent } from './components/ads-banner/ads-banner.component';
import { CommonModule } from '@angular/common';
import { RadioStation } from './models/station.model';
import { StationService } from './services/station.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RadioPlayerComponent,
    StationListComponent,
    CountryMenuComponent,
    AdsBannerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedStation!: RadioStation;
  selectedCountry = 'Colombia';

  constructor(private stationService: StationService) { }

  ngOnInit() {
    // Inicializar con la primera estación de Colombia
    const stations = this.stationService.getStations();
    const colombiaStations = stations.filter(s => s.country === 'Colombia');
    if (colombiaStations.length > 0) {
      this.selectedStation = colombiaStations[0];
    }
  }

  onStationSelected(station: RadioStation) {
    this.selectedStation = station;
  }

  onCountrySelected(country: string) {
    this.selectedCountry = country;
    this.updateBackground(country);
  }

  updateBackground(country: string) {
    // Remove old classes
    document.body.classList.remove('bg-colombia', 'bg-mexico', 'bg-rd', 'bg-salvador', 'bg-otros');

    // Add new class
    const className = `bg-${country.toLowerCase()}`;
    document.body.classList.add(className);
  }
}