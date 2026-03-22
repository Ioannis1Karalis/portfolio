import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service'; 

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  
  constructor(public langService: LanguageService) {}

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  isSubmitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) { 
      console.log('Sende Nachricht...', this.contactData);
      
      this.isSubmitted = true;
      form.resetForm();

      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }
  }
}