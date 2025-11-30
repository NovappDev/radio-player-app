export interface RadioStation {
  name: string;
  city: string;
  country?: string; // 'Colombia', 'Mexico', 'RD', 'Salvador', 'Otros'
  category: string;      // p.ej. 'Juvenil' | 'Noticias' | 'Videos'
  logoUrl?: string;      // para radios
  dial?: string;

  // 📻 Radio (opcional)
  streamUrl?: string;

  // ▶️ YouTube (opcional)
  youtubeId?: string;    // ej: 'dQw4w9WgXcQ'
}