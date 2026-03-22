import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavbarComponent } from '../navbar/navbar.component'; 
import { FooterComponent } from '../footer/footer.component'; 
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, FooterComponent], 
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private router: Router, public langService: LanguageService) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}