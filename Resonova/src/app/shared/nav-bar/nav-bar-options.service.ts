import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarOptionsService {
  navBarOptions : {id: number, name: string}[] = [
    {id: 0, name: 'Home'},
    {id: 1, name: 'Courses'},
    {id: 2, name: 'Teachers'},
    {id: 3, name: 'Schedule'},
    {id: 4, name: 'Prices'}
  ]

  pickedOption : {id: number, name: string} = this.navBarOptions[0];

  get options() : {id: number, name: string}[] {
    return this.navBarOptions
  }

  constructor() { }

}
