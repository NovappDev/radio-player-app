import { Component, EventEmitter, Output, Input } from '@angular/core';
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
export class StationListComponent {
  @Input() selectedStation!: RadioStation;
  @Output() selectStation = new EventEmitter<RadioStation>();
  
  stations: RadioStation[] = [];

  constructor(private stationService: StationService) {
    this.stations = this.stationService.getStations();
  }

  get categories(): string[] {
    return [...new Set(this.stations.map(s => s.category))];
  }

  onSelect(station: RadioStation) {
    this.selectStation.emit(station);
  }

  getStationsByCategory(category: string): RadioStation[] {
    return this.stations.filter(s => s.category === category);
  }
}