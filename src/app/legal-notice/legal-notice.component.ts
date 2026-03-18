import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; // Pfad anpassen!
import { FooterComponent } from '../footer/footer.component'; // Pfad anpassen!

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent, FooterComponent], // Hier hinzufügen
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}