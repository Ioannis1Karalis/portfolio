import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Dadurch ist der Service in der ganzen App verfügbar
})
export class TranslationService {
  
  // Die aktuell gewählte Sprache (Start ist Englisch)
  public currentLang: 'EN' | 'DE' = 'EN';

  // Hier kommt dein komplettes Wörterbuch für die ganze Seite rein!
  public text = {
    EN: {
      navbar: { about: 'About me', skills: 'Skills', projects: 'Projects' },
      hero: { role: 'Frontend Developer', based: 'Based in Munich', open: 'Open to work' }
      // Hier kannst du später about, contact, etc. hinzufügen
    },
    DE: {
      navbar: { about: 'Über mich', skills: 'Fähigkeiten', projects: 'Projekte' },
      hero: { role: 'Frontend Entwickler', based: 'Ansässig in München', open: 'Offen für Arbeit' }
    }
  };

  // Die Funktion zum Wechseln
  public switchLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
  }
}