import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ColleaguesSectionComponent } from '../colleagues-section/colleagues-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, ColleaguesSectionComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {


}
