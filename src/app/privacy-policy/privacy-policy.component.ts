import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavbarComponent } from '../navbar/navbar.component'; 
import { FooterComponent } from '../footer/footer.component'; 

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, FooterComponent], 
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}