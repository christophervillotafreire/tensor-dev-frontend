import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.startVideoAutoplay();
  }

  private startVideoAutoplay() {
    if (this.heroVideo?.nativeElement) {
      const video = this.heroVideo.nativeElement;
      // Force DOM properties required by browser autoplay policies
      video.muted = true;
      video.defaultMuted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Browser autoplay prevented, registering fallback interaction:', err);
          const playOnInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('touchstart', playOnInteraction);
            window.removeEventListener('scroll', playOnInteraction);
            window.removeEventListener('keydown', playOnInteraction);
          };
          window.addEventListener('click', playOnInteraction, { once: true });
          window.addEventListener('touchstart', playOnInteraction, { once: true });
          window.addEventListener('scroll', playOnInteraction, { once: true });
          window.addEventListener('keydown', playOnInteraction, { once: true });
        });
      }
    }
  }
}
