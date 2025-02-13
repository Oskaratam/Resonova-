import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarOptionsService } from './nav-bar-options.service';

@Component({
  selector: 'rn-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navBarOptions !: {id: number, name: string}[];

  constructor(public navOptionsService: NavBarOptionsService) {
    this.navBarOptions = this.navOptionsService.options;
  }

  onPick(option: {id: number, name: string}) { 
    this.navOptionsService.pickedOption = option;
  }

  
  
}
