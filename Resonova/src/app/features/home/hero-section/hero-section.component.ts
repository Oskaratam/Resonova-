import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'rn-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('videoElement') video!: ElementRef;
  ngAfterViewInit() {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = true;
    video.play().catch( er =>  console.log(er) )
  }
}
