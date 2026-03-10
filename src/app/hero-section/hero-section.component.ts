import { Component } from '@angular/core';
// WICHTIG: Stelle sicher, dass der Pfad zu deiner Navbar-Component stimmt!
import { NavbarComponent } from '../navbar/navbar.component'; 

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent], // Hier muss die Navbar rein!
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})

export class HeroSectionComponent {
  baseItems = [
    'Available for remote work', '•',
    'Frontend Developer', '•',
    'Based in Munich', '•',
    'Open to work', '•'
  ];


  tickerItems = [...this.baseItems, ...this.baseItems, ...this.baseItems];
}
