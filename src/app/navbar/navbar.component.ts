import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Wichtig für [class.active]

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  // Standardmäßig ist Englisch ausgewählt
  currentLang: 'EN' | 'DE' = 'EN';

  // Wechselt die Sprache, wenn man auf den Button klickt
  switchLang(lang: 'EN' | 'DE') {
    this.currentLang = lang;
    // Hier kannst du später eine echte Übersetzungs-Logik einbauen
    console.log('Sprache gewechselt zu:', this.currentLang);
  }
}