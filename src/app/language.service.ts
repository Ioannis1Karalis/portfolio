import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  currentLang: 'EN' | 'DE' = 'EN';

  setLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
  }
}