import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ColleaguesSectionComponent } from './colleagues-section/colleagues-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroSectionComponent, AboutMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, ColleaguesSectionComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  // Wir starten die Koordinaten weit außerhalb des Bildschirms, 
  // damit das Licht erst auftaucht, wenn die Maus bewegt wird.
  mouseX = -1000;
  mouseY = -1000;

  // Hört auf jede Mausbewegung auf der gesamten Webseite
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
