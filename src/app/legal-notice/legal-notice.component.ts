import { Component } from '@angular/core';
import { Router } from '@angular/router'; // NEU
import { NavbarComponent } from '../navbar/navbar.component'; 
import { FooterComponent } from '../footer/footer.component'; 

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  // Router im Constructor injecten
  constructor(private router: Router) {}

  // Funktion zum Zurückkehren auf die Startseite
  goHome(): void {
    this.router.navigate(['/']);
  }
}