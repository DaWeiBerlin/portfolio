import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImprintService } from './imprint.service';
import { DataprivacyService } from './dataprivacy.service';
import { LandingpageService } from './landingpage.service';
import { HeaderService } from './header.service';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
  
  constructor(private router: Router,private imprintService: ImprintService, private DataPrivacyService: DataprivacyService, private LandingPageService: LandingpageService, private headerService: HeaderService, private languageService:LanguageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/imprint') {
          this.site = "imprint"
        } else if (event.url === '/dataprivacy') {
          this.site="dataprivacy"
        } else if (event.url === '/'){
          this.site="landingpage"
        }
      }
    });
   }

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


  
  private menuSubjectMobile = new BehaviorSubject<string>(
  `<div id="landingPage">
      <div><a href="#section3">Why me</a></div>
      <div><a href="#section4">My Skill set</a></div>
      <div><a href="#section5">My Work</a></div>
      <div><a href="#section6">Contact me</a></div>
    </div>
    <div>
      <div (click)="navMenuService.switchLanguage('de')">DE</div>
      <div></div>
      <div (click)="navMenuService.switchLanguage('en')">EN</div>
    </div>`
);

menuMobile$ = this.menuSubject.asObservable(); // Expose the menu as an observable

updateMenuMobile(menuMobile: string) {
  this.menuSubjectMobile.next(menuMobile); // Update the menu value
}

load = true

site="landingpage"
switchLanguage(language:string){
  this.languageService.language = language
  if(this.site=="imprint"){
    this.imprintService.switchLanguage(language)
    this.headerService.switchLanguage(language)
    
  }
  if(this.site=="dataprivacy"){
    this.DataPrivacyService.switchLanguage(language)
    this.headerService.switchLanguage(language)
  }
  if(this.site=="landingpage"){
    this.LandingPageService.switchLanguage(language)
    this.headerService.switchLanguage(language)
  }
}

}
