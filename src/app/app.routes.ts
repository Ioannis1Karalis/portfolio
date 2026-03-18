import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
  // Wenn der Link leer ist (Startseite), lade das ganze Portfolio
  { path: '', component: MainPageComponent }, 
  
  // Wenn der Link /legal-notice heißt, lade nur das Impressum
  { path: 'legal-notice', component: LegalNoticeComponent } 
];