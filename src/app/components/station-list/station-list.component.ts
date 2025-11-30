import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioStation } from '../../models/station.model';
import { StationService } from '../../services/station.service';

@Component({
  standalone: true,
  selector: 'app-station-list',
  imports: [CommonModule],
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css'],
})
export class StationListComponent implements OnChanges {
  @Input() selectedStation!: RadioStation;
  @Input() filterCountry: string = 'Colombia';
  @Output() selectStation = new EventEmitter<RadioStation>();

  stations: RadioStation[] = [];

  constructor(private stationService: StationService) {
    this.stations = this.stationService.getStations();
    console.log('StationList initialized. Total stations:', this.stations.length);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterCountry']) {
      console.log('Filter country changed to:', this.filterCountry);
    }
  }

  get filteredStations(): RadioStation[] {
    if (!this.filterCountry || this.filterCountry === 'Otros') {
      console.log('Filtering: Otros or All');
      if (this.filterCountry === 'Otros') {
        const mainCountries = ['Colombia', 'Mexico', 'RD', 'Salvador'];
        return this.stations.filter(s => !s.country || !mainCountries.includes(s.country));
      }
      return this.stations;
    }
    const filtered = this.stations.filter(s => s.country === this.filterCountry);
    console.log(`Filtering by ${this.filterCountry}: found ${filtered.length} stations`);
    return filtered;
  }

  get categories(): string[] {
    return [...new Set(this.filteredStations.map(s => s.category))];
  }

  onSelect(station: RadioStation) {
    this.selectStation.emit(station);
  }

  getStationsByCategory(category: string): RadioStation[] {
    return this.filteredStations.filter(s => s.category === category);
  }
}