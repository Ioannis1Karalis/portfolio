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
    { text: "Working with Ioannis is a great experience. He has a remarkable ability to grasp complex problems quickly and always finds practical solutions. He is an incredibly reliable and dedicated team player.", author: "Stefan K." },
    { text: "Ioannis has a fantastic eye for detail and a strong commitment to quality. He approaches every task with great focus and precision, making sure that the final result always meets the highest standards.", author: "Yagmur O." },
    { text: "A highly proactive colleague. Ioannis stays calm under pressure, communicates clearly, and always tackles challenges with a positive, results-oriented mindset. I'd gladly work with him on any project.", author: "Elpida K." },
    { text: "I really loved collaborating with Ioannis. He is incredibly fast at learning new skills and always brings fresh, creative ideas to the table. His ambition and open-mindedness make him a great asset to any team.", author: "Kiki K." },
    { text: "Ioannis brings fantastic energy and technical expertise to the team. He consistently writes clean, efficient code and tackles challenges with a great mindset. An inspiring and highly reliable colleague.", author: "Evangelia K." }  
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
    }, 7000);
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