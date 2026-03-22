import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {

  constructor(public langService: LanguageService) {}

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
