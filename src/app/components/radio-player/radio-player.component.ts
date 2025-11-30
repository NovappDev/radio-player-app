import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RadioStation } from '../../models/station.model';

@Component({
  standalone: true,
  selector: 'app-radio-player',
  imports: [CommonModule],
  templateUrl: './radio-player.component.html',
  styleUrls: ['./radio-player.component.css'],
})
export class RadioPlayerComponent
  implements AfterViewInit, OnDestroy, OnChanges {
  /** Estación seleccionada: puede ser radio (streamUrl) o YouTube (youtubeId) */
  @Input() station!: RadioStation;

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  safeYoutubeUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  // ===== Lifecycle =====
  ngAfterViewInit(): void {
    this.tryAutoplayRadio();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Si cambia la estación, recalculamos el iframe seguro o intentamos reproducir radio
    if (changes['station']) {
      if (this.station?.youtubeId) {
        const url = `https://www.youtube.com/embed/${this.station.youtubeId}?autoplay=1&mute=1&rel=0`;
        this.safeYoutubeUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(url);
      } else {
        this.safeYoutubeUrl = undefined;
        // Intentar reproducir si es radio y ya existe el audio ref
        this.tryAutoplayRadio();
      }
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  // ===== Helpers reproducción =====
  private tryAutoplayRadio(): void {
    // Los navegadores pueden bloquear autoplay; no pasa nada si falla
    if (this.station?.streamUrl && this.audioPlayer?.nativeElement) {
      // pequeño delay para asegurar que el <audio> esté en el DOM
      setTimeout(() => {
        this.audioPlayer.nativeElement.play().catch(() => { });
      }, 0);
    }
  }

  isYouTube(): boolean {
    return !!this.station?.youtubeId;
  }

  isRadio(): boolean {
    return !!this.station?.streamUrl;
  }
}