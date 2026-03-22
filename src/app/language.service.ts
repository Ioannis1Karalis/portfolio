import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  // 1. Fehler behoben: Großbuchstaben verwenden!
  currentLang: 'EN' | 'DE' = 'EN';

  // 2. Fehler behoben: Die Funktion exakt so benennen, wie das HTML sie aufruft!
  setLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
  }
}