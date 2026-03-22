import { Component } from '@angular/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

  constructor(public langService: LanguageService) {}

}
