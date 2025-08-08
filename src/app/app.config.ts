import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RadioPlayerComponent } from './components/radio-player/radio-player.component';
import { StationListComponent } from './components/station-list/station-list.component';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    RadioPlayerComponent,
    StationListComponent
  ]
};