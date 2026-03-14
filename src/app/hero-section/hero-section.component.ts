import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; 

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent], 
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
