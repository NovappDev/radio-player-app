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
      country: 'Colombia',
      dial: '96.1 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/radiotiempo_baq.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RT_BARRANQUILLAAAC.aac?dist=oro_web',
    },
    {
      name: 'Radio Tiempo',
      city: 'Cartagena',
      country: 'Colombia',
      dial: '96.1 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/radiotiempo_cart.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RT_CARTAGENAAAC.aac?dist=oro_web',
    },
    {
      name: 'Radio Tiempo',
      city: 'Medellin',
      country: 'Colombia',
      dial: '96.1 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/radiotiempo_med.png',
      streamUrl: 'https://27353.live.streamtheworld.com/RT_MEDELLINAAC.aac?dist=oro_web',
    },
    {
      name: 'Besame',
      city: 'Medellin',
      country: 'Colombia',
      dial: '94.9 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/muestra.png',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/BESAME_MEDELLINAAC_SC',
    },

    //Crossover
    {
      name: 'Olimpica Stereo',
      city: 'Barranquilla',
      country: 'Colombia',
      dial: '92.1 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/olimpicaStereoBaq.png',
      streamUrl: 'https://13693.live.streamtheworld.com/OLP_BARRANQUILLAAAC.aac?dist=oro_web',
    },
    {
      name: 'Los 40',
      city: 'Bogota',
      country: 'Colombia',
      dial: '102.2 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/los40.png',
      streamUrl: 'https://27343.live.streamtheworld.com/LOS40_COLOMBIAAAC.aac?csegid=10000&gdpr=0&dist=los40co-web-tod-permanente&ttag=los40-ads-test-2021&lsid=924455&tdsdk=js-2.9&swm=true&pname=TDSdk&pversion=2.9&banners=300x250&burst-time=15&sbmid=583fff7e-50eb-40f0-f984-953a040dcc6f',
    },
    {
      name: 'La Mega',
      city: 'Bogota',
      country: 'Colombia',
      dial: '90.2 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/laMega.webp',
      streamUrl: 'https://rr1---sn-ja5gvjv-c59l.googlevideo.com/videoplayback?expire=1754997665&ei=IbOaaIb6MaH23rsP6PXHgAE&ip=190.84.116.107&id=1360bec5fa4b1675&itag=22&source=youtube&requiressl=yes&xpc=Eghovf3BOnoBAQ==&met=1754968865,&mh=BN&mm=31&mn=sn-ja5gvjv-c59l&ms=au&mv=m&mvi=1&pcm2cms=yes&pl=22&rms=au,au&susc=gvp&acao=yes&ctier=L&mime=video/mp4&vprv=1&rqh=1&dur=15.092&lmt=1754025032873136&mt=1754968376&cpn=NtjlTTyTkGiUdGqn&txp=4432534&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,acao,ctier,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRAIgV241Kzw-Iowy92Ljc3KnTof-75IxAxQumcHs6O9CwV0CIAOEb3_tSIbt8N1ijsBKaX-VLapd4WEMiLztGuDYrnU_&lsparams=met,mh,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=APaTxxMwRgIhAL39V6YtE7npOEiwULa64P2CUT6V0fIOMIwguq1Q0T7yAiEAjFW09f9xuOPE9g1qt1NHmNF67YuIHVVGpoRBQBLSjmo=',
    },
    {
      name: 'Radio Acktiva',
      city: 'Bogota',
      country: 'Colombia',
      dial: '200.1',
      category: 'Crossover',
      logoUrl: 'assets/logos/radioactiva.png',
      streamUrl: 'https://24403.live.streamtheworld.com/RADIO_ACTIVAAAC.aac?csegid=2000&ppid=91875746752280729201489719166934840933&gdpr=0&dist=radioacktiva-web-tod-permanente&tdsdk=js-2.9&swm=true&pname=TDSdk&pversion=2.9&banners=none&burst-time=15&sbmid=9a2de135-53b3-4db2-9a97-b9a9cb3bd9d8',
    },
    {
      name: 'Mix',
      city: 'Bogota',
      country: 'Colombia',
      dial: '92.9 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/mix-929.jpg',
      streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/MIX_BOGOTA_SC',
    },
    {
      name: 'B Mor',
      city: 'Bogota',
      country: 'Colombia',
      dial: '92.9 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/bmor.png',
      streamUrl: 'https://streamingmediaradio.live:8086/stream/1/',
    },

    //Categoria de Noticias
    {
      name: 'Blu Radio',
      city: 'Bogota',
      country: 'Colombia',
      dial: '89.9 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/bluRadio.png',
      streamUrl: 'https://27343.live.streamtheworld.com/BLURADIO_ADP.aac',
    },
    {
      name: 'Caracol Noticias',
      city: 'Bogota',
      country: 'Colombia',
      dial: '100.9 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/caracol_radio.jpg',
      streamUrl: 'https://27573.live.streamtheworld.com/CARACOL_RADIO_SC',
    },
    {
      name: 'W Radio',
      city: 'Bogota',
      country: 'Colombia',
      dial: '99.9 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/wradio.jpg',
      streamUrl: 'https://27593.live.streamtheworld.com/WRADIOAAC_SC?csegid=10000',
    },
    {
      name: 'Emisora Ejemplo',
      city: 'Bogota',
      country: 'Colombia',
      dial: '89.9',
      category: 'Noticias',
      logoUrl: 'assets/logos/muestra.png',
      streamUrl: 'XXX',
    },

    //Cristianas

    {
      name: 'Cristiana Radio Colombia',
      city: 'Colombia',
      country: 'Colombia',
      dial: '44.1',
      category: 'Cristianas',
      logoUrl: 'assets/logos/cristiana-radio.png',
      streamUrl: 'https://radio11.servidorderadio.net:8086/stream?type=http&nocache=37',
    },

    //Videos Tech
    {
      name: 'Evaluamos GPT-5',
      city: 'Platzi',
      country: 'Colombia',
      category: 'Videos Tech',
      youtubeId: 'WKIcI8xwC4U',
    },
    {
      name: 'Google lanza una IA que crea apps',
      city: 'igue Baena IA',
      country: 'Colombia',
      category: 'Videos Tech',
      youtubeId: 'F3yot_m9_dw',
    },
    //Podcast Emprendimiento
    {
      name: '3 herramientas para PERDER el miedo a EMPRENDER',
      city: 'YouTube',
      country: 'Colombia',
      category: 'Podcast',
      youtubeId: 'jxBQJNDczoM',
    },
    {
      name: '5 Propósitos Clave para Emprendedores',
      city: 'YouTube',
      country: 'Colombia',
      category: 'Podcast',
      youtubeId: 'jqDpQjgOSIw',
    },
    {
      name: '10 errores en el manejo del flujo de caja',
      city: 'YouTube',
      country: 'Colombia',
      category: 'Podcast',
      youtubeId: 'RLrJp5ZLGfo',
    },

    // --- MEXICO ---

    {
      name: 'Amor',
      city: 'CDMX',
      country: 'Mexico',
      dial: '95.3 FM',
      category: 'Romanticas',
      logoUrl: 'assets/logos/amor_cdmx.png',
      streamUrl: 'https://27143.live.streamtheworld.com/XHSHFMAAC/HLS/playlist.m3u8?aw_0_1st.playerid=iHeartRadioWebPlayer&aw_0_1st.skey=11596869506&clientType=web&companionAds=false&deviceName=web-desktop&dist=iheart&host=webapp.WW&listenerId=&playedFrom=157&pname=live_profile&profileId=11596869506&stationid=6532&terminalId=165&territory=WW',
    },
     {
      name: 'Radio Mexicana',
      city: 'CDMX',
      country: 'Mexico',
      dial: '1300 AM',
      category: 'Pop',
      logoUrl: 'assets/logos/radio_mexicana_cdmx.png',
      streamUrl: 'https://stream-158.zeno.fm/batv2d05dkhvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJiYXR2MmQwNWRraHZ2IiwiaG9zdCI6InN0cmVhbS0xNTguemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImhfWmR5UmlOVGplOEVtbFhZTnRPYmciLCJpYXQiOjE3NjM4MjQ1NDIsImV4cCI6MTc2MzgyNDYwMn0.bfZ5hrMeC0I9roiaymN0z9rVc60DRK6UBupEQgX0-CQ',
    },
    {
      name: 'Pop FM',
      city: 'CDMX',
      country: 'Mexico',
      dial: '98.7 FM',
      category: 'Pop',
      logoUrl: 'assets/logos/pop_fm-cdmx.png',
      streamUrl: 'https://stream-156.zeno.fm/94abs07w82quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5NGFiczA3dzgycXV2IiwiaG9zdCI6InN0cmVhbS0xNTYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkZWSXlUWGs0UkRtRU4wRkd5UzRTX1EiLCJpYXQiOjE3NjM4MjQxMjAsImV4cCI6MTc2MzgyNDE4MH0.jxLjuEyUYBbixVYOCL7SdMyaZWiLwt-pdfelRcvfoX0',
    },
    {
      name: 'MVS Radio',
      city: 'CDMX',
      country: 'Mexico',
      dial: '101.7 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/mvs-noticias_cdmx.png',
      streamUrl: 'https://18003.live.streamtheworld.com/XHMVSFM_SC',
    },
   
    // --- REPUBLICA DOMINICANA ---
    {
      name: 'Z 101 Digital',
      city: 'Santo Domingo',
      country: 'RD',
      dial: '101.3 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/muestra.png',
      streamUrl: 'https://domiplay.net/stream/z101',
    },

    // --- EL SALVADOR ---
    {
      name: 'Astral',
      city: 'San Salvador',
      country: 'Salvador',
      dial: '102.9 FM',
      category: 'Pop',
      logoUrl: 'assets/logos/astral_salvador.png',
      streamUrl: 'https://streaming.rcs.com.sv/proxy/astral/stream',
    },
    {
      name: 'ABC',
      city: 'San Salvador',
      country: 'Salvador',
      dial: '100.1 FM',
      category: 'Electronica',
      logoUrl: 'assets/logos/abc_salvador.png',
      streamUrl: 'https://streaming.rcs.com.sv/proxy/abc/stream',
    },
    {
      name: 'La Urbana',
      city: 'San Salvador',
      country: 'Salvador',
      dial: '94.9 FM',
      category: 'Crossover',
      logoUrl: 'assets/logos/laUrbana_savador.png',
      streamUrl: 'https://streaming.rcs.com.sv/proxy/urbana/stream',
    },

    // --- PANAMA ---
    {
      name: 'Panama',
      city: 'San Salvador',
      country: 'Panama',
      dial: '104.1 FM',
      category: 'Noticias',
      logoUrl: 'assets/logos/muestra.png',
      streamUrl: 'https://radio.yskl.com.sv:8000/yskl',
    },







  ];

  getStations(): RadioStation[] {
    return this.stations;
  }
}