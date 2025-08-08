import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioStation } from '../../models/station.model';

@Component({
  standalone: true,
  selector: 'app-radio-player',
  imports: [CommonModule],
  templateUrl: './radio-player.component.html',
  styleUrls: ['./radio-player.component.css']
})
export class RadioPlayerComponent implements AfterViewInit {
  @Input() station!: RadioStation;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit(): void {
    const player = this.audioPlayer.nativeElement;
    player.play().catch((err) => {
      console.warn('El navegador bloqueó el autoplay:', err);
    });
  }
}