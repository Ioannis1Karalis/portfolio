import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  
  constructor(public langService: LanguageService, private http: HttpClient) {}

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  privacyAccepted = false;
  mailTest = false; 

  post = {
    endPoint: 'https://ikaralis.com/sendMail.php', // PHP-LINK EINTRAGEN
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isSubmitted = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.isSubmitted = true;
            ngForm.resetForm();

            setTimeout(() => {
              this.isSubmitted = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Testmodus aktiv: Formular würde jetzt gesendet werden.', this.contactData);
      
      this.isSubmitted = true;
      ngForm.resetForm();

      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }
  }
}