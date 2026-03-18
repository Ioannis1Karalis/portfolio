import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  scrollTo(elementId: string): void {
    if (this.router.url !== '/') {
      this.navigateAndScroll(elementId);
    } else {
      this.executeScroll(elementId);
    }
  }

  private navigateAndScroll(elementId: string): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => this.executeScroll(elementId), 100);
    });
  }

  private executeScroll(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}