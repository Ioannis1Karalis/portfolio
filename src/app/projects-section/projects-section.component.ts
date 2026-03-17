import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  standalone: true,
imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})

export class ProjectsSectionComponent {
  
projects = [
    {
      id: '01',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://deinedomain.com/join',
      image: '../../assets/img/projects/join.png'
    },
    {
      id: '02',
      title: 'Sharkie',
      description: 'A jump and run game based on object-oriented programming. Help Sharkie to find the magic coins and fight the killer whale.',
      skills: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://deinedomain.com/sharkie',
      image: '../../assets/img/projects/sharkie.png'
    },
    {
      id: '03',
      title: 'Pokedex',
      description: 'An interactive digital library for Pokémon. Fetch data via REST-API to search for species and explore their detailed stats and abilities.',
      skills: ['JavaScript', 'HTML', 'CSS', 'REST-API'], 
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://deinedomain.com/pokedex',
      image: '../../assets/img/projects/pokedex.png'
    },
    {
      id: '04',
      title: 'Ring of Fire',
      description: 'A real-time multiplayer version of the classic party game. Join your friends online, draw cards, and complete the fun challenges together.',
      skills: ['Angular','TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://deinedomain.com/ringoffire',
      image: '../../assets/img/projects/ringoffire.png'
    },
    {
      id: '05',
      title: 'Bestell App',
      description: 'A responsive web application for food delivery. Browse the menu, add your favorite meals to the cart, and view the calculated total price.',
      skills: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://deinedomain.com/bestellapp',
      image: '../../assets/img/projects/bestellapp.png'
    }
  ];

  currentProjectIndex: number | null = null;

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