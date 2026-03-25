import { Component, Inject, PLATFORM_ID, Renderer2, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

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
    private renderer: Renderer2,
    private el: ElementRef,
    private ngZone: NgZone, // <-- NEU: Der Change-Detection-Bremser
    @Inject(PLATFORM_ID) private platformId: Object // <-- NEU: Der Browser-Check
  ) { }

  ngAfterViewInit() {
    // 1. Zuerst prüfen: Sind wir im Browser (nicht auf dem Server)?
    if (isPlatformBrowser(this.platformId)) {
      
      const glowElement = this.el.nativeElement.querySelector('.cursor-glow');

      // 2. Das ist der wichtigste Trick: Den Listener "außerhalb von Angular" starten!
      this.ngZone.runOutsideAngular(() => {
        this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
          
          // 3. Hier führen wir nur das JavaScript-Positionieren durch.
          // Angular wird NICHT informiert, dass sich eine Variable geändert hat!
          if (glowElement) {
            glowElement.style.left = `${event.clientX}px`;
            glowElement.style.top = `${event.clientY}px`;
          }
        });
      });
    }
  }
}
