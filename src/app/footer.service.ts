import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  private menuSubject = new BehaviorSubject<string>(`<a (click)="scrollToDiv('section3')">
        <span>Why me</span>
      </a>
      <a (click)="scrollToDiv('section4')">
        <span>Skills</span>
      </a>
      <a (click)="scrollToDiv('section5')">
        <span>My Work</span>
      </a>
      <a (click)="scrollToDiv('section6')">
        <span>Contact</span>
      </a>`);
  menu$ = this.menuSubject.asObservable(); // Expose the menu as an observable

  updateMenu(menu: string) {
    this.menuSubject.next(menu); // Update the menu value
  }
}
