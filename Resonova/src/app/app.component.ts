import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './features/home/hero-section/hero-section.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';


@Component({
  selector: 'rn-root',
  imports: [RouterOutlet, HeroSectionComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Resonova';
}
