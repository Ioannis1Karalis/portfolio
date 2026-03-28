import { Component, Inject, PLATFORM_ID, NgZone, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(
    private ngZone: NgZone, 
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 200,
          disableMutationObserver: true
        });
      }, 100);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          
          setTimeout(() => {
            AOS.refreshHard();
          }, 100);
          
        }
      });

      this.ngZone.runOutsideAngular(() => {
        document.addEventListener('mousemove', (e: MouseEvent) => {
          document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
      });

    }
  }
}
