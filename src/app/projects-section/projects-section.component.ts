import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service'; 

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  
  constructor(public langService: LanguageService) {}

  currentProjectIndex: number | null = null;

  get projects() {
    if (this.langService.currentLang === 'EN') {
      return [
        {
          id: '01',
          title: 'Join',
          description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
          githubUrl: 'https://github.com/Ioannis1Karalis/Join.git',
          liveUrl: 'https......',
          image: '../../assets/img/projects/join.png'
        },
        {
          id: '02',
          title: 'Sharkie',
          description: 'A jump and run game based on object-oriented programming. Help Sharkie to find the magic coins and fight the killer whale.',
          skills: ['JavaScript', 'HTML', 'CSS'],
          githubUrl: 'https://github.com/Ioannis1Karalis/Sharkie.git',
          liveUrl: 'https://deinedomain.com/sharkie',
          image: '../../assets/img/projects/sharkie.png'
        },
        {
          id: '03',
          title: 'Pokedex',
          description: 'An interactive digital library for Pokémon. Fetch data via REST-API to search for species and explore their detailed stats and abilities.',
          skills: ['JavaScript', 'HTML', 'CSS', 'REST-API'], 
          githubUrl: 'https://github.com/Ioannis1Karalis/Pokedex.git',
          liveUrl: 'https://deinedomain.com/pokedex',
          image: '../../assets/img/projects/pokedex.png'
        },
        {
          id: '04',
          title: 'Ring of Fire',
          description: 'A real-time multiplayer version of the classic party game. Join your friends online, draw cards, and complete the fun challenges together.',
          skills: ['Angular','TypeScript', 'HTML', 'CSS', 'Firebase'],
          githubUrl: 'https://github.com/Ioannis1Karalis/Ring-of-Fire.git',
          liveUrl: 'https://deinedomain.com/ringoffire',
          image: '../../assets/img/projects/ringoffire.png'
        },
        {
          id: '05',
          title: 'Bestell App',
          description: 'A responsive web application for food delivery. Browse the menu, add your favorite meals to the cart, and view the calculated total price.',
          skills: ['JavaScript', 'HTML', 'CSS'],
          githubUrl: 'https://github.com/Ioannis1Karalis/BestellApp.git',
          liveUrl: 'https://deinedomain.com/bestellapp',
          image: '../../assets/img/projects/bestellapp.png'
        }
      ];
    } else {
      return [
        {
          id: '01',
          title: 'Join',
          description: 'Ein Task-Manager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop und weise Benutzer und Kategorien zu.',
          skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
          githubUrl: 'https://github.com/Ioannis1Karalis/Join.git',
          liveUrl: 'https......',
          image: '../../assets/img/projects/join.png'
        },
        {
          id: '02',
          title: 'Sharkie',
          description: 'Ein Jump-and-Run-Spiel, basierend auf objektorientierter Programmierung. Hilf Sharkie, die magischen Münzen zu finden und besiege den Killerwal.',
          skills: ['JavaScript', 'HTML', 'CSS'],
          githubUrl: 'https://github.com/Ioannis1Karalis/Sharkie.git',
          liveUrl: 'https://deinedomain.com/sharkie',
          image: '../../assets/img/projects/sharkie.png'
        },
        {
          id: '03',
          title: 'Pokedex',
          description: 'Eine interaktive digitale Bibliothek für Pokémon. Rufe Daten über eine REST-API ab, um nach Arten zu suchen und ihre detaillierten Werte und Fähigkeiten zu erkunden.',
          skills: ['JavaScript', 'HTML', 'CSS', 'REST-API'], 
          githubUrl: 'https://github.com/Ioannis1Karalis/Pokedex.git',
          liveUrl: 'https://deinedomain.com/pokedex',
          image: '../../assets/img/projects/pokedex.png'
        },
        {
          id: '04',
          title: 'Ring of Fire',
          description: 'Eine Echtzeit-Multiplayer-Version des klassischen Partyspiels. Tritt deinen Freunden online bei, ziehe Karten und meistert gemeinsam lustige Herausforderungen.',
          skills: ['Angular','TypeScript', 'HTML', 'CSS', 'Firebase'],
          githubUrl: 'https://github.com/Ioannis1Karalis/Ring-of-Fire.git',
          liveUrl: 'https://deinedomain.com/ringoffire',
          image: '../../assets/img/projects/ringoffire.png'
        },
        {
          id: '05',
          title: 'Bestell App',
          description: 'Eine responsive Webanwendung für Essensbestellungen. Durchstöbere die Speisekarte, lege deine Lieblingsgerichte in den Warenkorb und sieh dir den berechneten Gesamtpreis an.',
          skills: ['JavaScript', 'HTML', 'CSS'],
          githubUrl: 'https://github.com/Ioannis1Karalis/BestellApp.git',
          liveUrl: 'https://deinedomain.com/bestellapp',
          image: '../../assets/img/projects/bestellapp.png'
        }
      ];
    }
  }

  get currentProject() {
    return this.currentProjectIndex !== null ? this.projects[this.currentProjectIndex] : null;
  }

  openProject(index: number) {
    this.currentProjectIndex = index;
    document.body.style.overflow = 'hidden'; 
  }

  closeOverlay() {
    this.currentProjectIndex = null;
    document.body.style.overflow = 'auto'; 
  }

  nextProject() {
    if (this.currentProjectIndex !== null) {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    }
  }
}