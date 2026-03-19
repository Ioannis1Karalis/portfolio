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

  currentLang: 'EN' | 'DE' = 'EN';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.updateBodyScroll();
  }

  switchLang(lang: 'EN' | 'DE'): void {
    this.currentLang = lang;
  }

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
    this.closeMenu();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private updateBodyScroll(): void {
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

}