import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
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
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}