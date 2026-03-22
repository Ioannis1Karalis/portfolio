import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; 
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent], 
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  constructor(public langService: LanguageService) {}

  get baseItems() {
    if (this.langService.currentLang === 'EN') {
      return [
        'Available for remote work', '•',
        'Frontend Developer', '•',
        'Based in Munich', '•',
        'Open to work', '•'
      ];
    } else {
      return [
        'Verfügbar für Remote-Arbeit', '•',
        'Frontend Entwickler', '•',
        'Wohnhaft in München', '•',
        'Offen für Jobangebote', '•'
      ];
    }
  }

  get tickerItems() {
    return [...this.baseItems, ...this.baseItems, ...this.baseItems];
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}