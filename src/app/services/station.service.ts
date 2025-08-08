import { Injectable } from '@angular/core';
import { RadioStation } from '../models/station.model';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private stations: RadioStation[] = [
    //Categoria de Romanticas
    {
      name: 'Radio Tiempo',
      city: 'Barranquilla',
      dial: '96.1 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/radiotiempo_baq.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RT_BARRANQUILLAAAC.aac?dist=oro_web',
    },
    {
      name: 'Radio Tiempo',
      city: 'Cartagena',
      dial: '96.1 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/radiotiempo_cart.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RT_CARTAGENAAAC.aac?dist=oro_web',
    },
    {
      name: 'Radio Tiempo',
      city: 'Medellin',
      dial: '96.1 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/radiotiempo_med.png',
      streamUrl: 'https://27353.live.streamtheworld.com/RT_MEDELLINAAC.aac?dist=oro_web',
    },
    {
      name: 'Besame',
      city: 'Medellin',
      dial: '94.9 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/muestra.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/BESAME_MEDELLINAAC_SC',
    },

    //Crossover
    {
      name: 'Los 40',
      city: 'Bogota',
      dial: '102.2 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/los40.png',
      streamUrl: 'https://27343.live.streamtheworld.com/LOS40_COLOMBIAAAC.aac?csegid=10000&gdpr=0&dist=los40co-web-tod-permanente&ttag=los40-ads-test-2021&lsid=924455&tdsdk=js-2.9&swm=true&pname=TDSdk&pversion=2.9&banners=300x250&burst-time=15&sbmid=583fff7e-50eb-40f0-f984-953a040dcc6f',
    },
    {
      name: 'Radio Acktiva',
      city: 'Bogota',
      dial: '200.1',
      category: 'Crossover',
      logoUrl: 'assets/logos/radioactiva.png',
      streamUrl: 'https://24403.live.streamtheworld.com/RADIO_ACTIVAAAC.aac?csegid=2000&ppid=91875746752280729201489719166934840933&gdpr=0&dist=radioacktiva-web-tod-permanente&tdsdk=js-2.9&swm=true&pname=TDSdk&pversion=2.9&banners=none&burst-time=15&sbmid=9a2de135-53b3-4db2-9a97-b9a9cb3bd9d8',
    },
    {
      name: 'Mix',
      city: 'Bogota',
      dial: '92.9 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/mix-929.jpg',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/MIX_BOGOTA_SC',
    },
    {
      name: 'B Mor',
      city: 'Bogota',
      dial: '92.9 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/bmor.png',
      streamUrl: 'https://streamingmediaradio.live:8086/stream/1/',
    },
    
    //Categoria de Noticias
    {
      name: 'Blu Radio',
      city: 'Bogota',
      dial: '89.9 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/bluRadio.png',
      streamUrl: 'https://27363.live.streamtheworld.com/BLURADIO_ADP.aac?dist=%2520blu_web',
    },
    {
      name: 'W Radio',
      city: 'Bogota',
      dial: '99.9 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/wradio.jpg',
      streamUrl: 'https://27593.live.streamtheworld.com/WRADIOAAC_SC?csegid=10000',
    },
    {
      name: 'Emisora Ejemplo',
      city: 'Bogota',
      dial: '89.9',
      category: 'Noticias',
      logoUrl: 'assets/logos/muestra.png',
      streamUrl: 'XXX',
    },

    //Cristianas
    
    {
      name: 'Cristiana Radio Colombia',
      city: 'Colombia',
      dial: '44.1',
      category: 'Cristianas',
      logoUrl: 'assets/logos/cristiana-radio.png',
      streamUrl: 'https://radio11.servidorderadio.net:8086/stream?type=http&nocache=37',
    },

    //Mexicanas
  {
      name: 'Cristiana Radio Colombia',
      city: 'Colombia',
      dial: '44.1',
      category: 'Mexico',
      logoUrl: 'assets/logos/cristiana-radio.png',
      streamUrl: 'https://radio11.servidorderadio.net:8086/stream?type=http&nocache=37',
    }
  ];

  getStations(): RadioStation[] {
    return this.stations;
  }
}