import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioStation } from '../../models/station.model';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent {
  @Input() selectedStation!: RadioStation; // ✅ Para marcar la emisora activa
  @Output() selectStation = new EventEmitter<RadioStation>();
  stations: RadioStation[] = [];

  constructor(private stationService: StationService) {
    this.stations = this.stationService.getStations();
  }

  get categories(): string[] {
    return [...new Set(this.stations.map(s => s.category))];
  }

  getStationsByCategory(category: string): RadioStation[] {
    return this.stations.filter(s => s.category === category);
  }

  onSelect(station: RadioStation) {
    this.selectStation.emit(station);
  }
}