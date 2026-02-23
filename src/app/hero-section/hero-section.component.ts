import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
// Das sind deine Grund-Elemente
  baseItems = [
    'Available for remote work', '•',
    'Frontend Developer', '•',
    'Based in Munich', '•',
    'Open to work', '•'
  ];

  // Wir hängen das Array einfach 3x aneinander. 
  // Das füllt jeden 4K-Monitor, ohne dein HTML zu zerstören!
  tickerItems = [...this.baseItems, ...this.baseItems, ...this.baseItems];
}
