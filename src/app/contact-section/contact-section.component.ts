import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  isSubmitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) { // Keine extra Checkbox-Prüfung nötig, da diese "required" im HTML ist
      console.log('Sende Nachricht...', this.contactData);
      
      this.isSubmitted = true;
      form.resetForm();

      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }
  }
}