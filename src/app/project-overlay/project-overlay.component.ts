import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service'; // Pfad ggf. anpassen!

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
export class ProjectOverlayComponent {
  
  @Input() currentProject: any = null;
  
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  constructor(public langService: LanguageService) {}

  closeOverlay() {
    this.close.emit();
  }

  nextProject() {
    this.next.emit();
  }
}