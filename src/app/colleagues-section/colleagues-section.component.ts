import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colleagues-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues-section.component.html',
  styleUrl: './colleagues-section.component.scss'
})
export class ColleaguesSectionComponent implements OnInit, OnDestroy {
  
  testimonials = [
    { text: "Working with Ioannis was a great experience. His deep understanding of front-end technologies and his problem-solving skills made our project a huge success. He is a highly reliable partner.", author: "Stefan K." },
    { text: "Ioannis has a fantastic eye for detail. He effortlessly bridges the gap between design and technical implementation, always delivering clean, maintainable, and pixel-perfect results.", author: "Yagmur O." },
    { text: "A highly proactive developer. Ioannis stays calm under pressure, communicates clearly, and always finds the most efficient way to tackle complex bugs. I'd gladly work with him again.", author: "Elpida K." },
    { text: "I loved collaborating with Ioannis. He understands design principles perfectly and brings wireframes to life with elegant code. He makes sure the final product looks exactly as intended.", author: "Kiki K" }
  ];

  displayTestimonials: any[] = [];
  currentIndex: number = 2;
  isTransitioning: boolean = true;
  isLocked: boolean = false;
  autoPlayInterval: any;

  ngOnInit() {
    this.displayTestimonials = [
      this.testimonials[this.testimonials.length - 1], 
      ...this.testimonials, 
      this.testimonials[0]
    ];
    
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }

  next() {
    if (this.isLocked) return; 
    
    this.isLocked = true;
    this.isTransitioning = true;
    this.currentIndex++;
    this.resetTimer();

    setTimeout(() => {
      if (this.currentIndex === this.displayTestimonials.length - 1) {
        this.isTransitioning = false;
        this.currentIndex = 1;
      }
      this.isLocked = false; 
    }, 500); 
  }

  prev() {
    if (this.isLocked) return;
    
    this.isLocked = true;
    this.isTransitioning = true;
    this.currentIndex--;
    this.resetTimer();

    setTimeout(() => {
      if (this.currentIndex === 0) {
        this.isTransitioning = false; 
        this.currentIndex = this.displayTestimonials.length - 2; 
      }
      this.isLocked = false;
    }, 500);
  }

  setIndex(originalIndex: number) {
    this.isTransitioning = true;
    this.currentIndex = originalIndex + 1;
    this.resetTimer();
  }

  resetTimer() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  isDotActive(index: number): boolean {
    if (this.currentIndex === index + 1) return true;
    if (this.currentIndex === 0 && index === this.testimonials.length - 1) return true; 
    if (this.currentIndex === this.displayTestimonials.length - 1 && index === 0) return true; 
    return false;
  }
}