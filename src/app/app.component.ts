import { Component,Renderer2,OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { Router, NavigationEnd } from '@angular/router';
import { NavMenuService } from './nav-menu.service';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint/imprint.component';
import { LanguageService } from './language.service';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private router: Router, private renderer: Renderer2, private NavMenuService:NavMenuService, private languageService: LanguageService,private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Dynamisches Hinzufügen und Entfernen von Klassen basierend auf der Route
        if (event.url === '/imprint') {
          this.renderer.addClass(document.body, 'imprint');
          this.renderer.removeClass(document.body, 'dataprivacy');
          this.NavMenuService.site="imprint"
        } else if (event.url === '/dataprivacy') {
          this.renderer.addClass(document.body, 'dataprivacy');
          this.renderer.removeClass(document.body, 'imprint');
          this.NavMenuService.site="dataprivacy"
        } else if (event.url === '/'){
          this.renderer.removeClass(document.body, 'imprint');
          this.renderer.removeClass(document.body, 'dataprivacy');
          this.NavMenuService.site="landingpage"
        }
      }
    });
  }

  @ViewChild(ImprintComponent) imprintComponent!: ImprintComponent;
  @ViewChild(DataprivacyComponent) DataprivacyComponent!: DataprivacyComponent;
  @ViewChild(LandingpageComponent) landingpageComponent!: LandingpageComponent;
  

  @HostListener('document:wheel', ['$event'])
  public onWheel(event: WheelEvent) {
    if(this.NavMenuService.site == "landingpage" && window.innerWidth > 1350){
      if (event.deltaY > 0 || event.deltaX > 0) {
        this.scrollRight(event.deltaY + event.deltaX);
      } else if (event.deltaY < 0 || event.deltaX < 0) {
        this.scrollLeft(event.deltaY + event.deltaX);
      }
    }else{
      if (event.deltaY > 0){
        this.scrollTop(event.deltaY)
      }else if (event.deltaY < 0){
        this.scrollBottom(event.deltaY)
      }
    }    
  }


  scrollTop(delta:any) {
    window.scrollBy({
      top: delta, // Number of pixels to scroll to the right
      behavior: "auto" // Smooth scrolling
    });
  }

  scrollBottom(delta:any) {
    window.scrollBy({
      top: delta, // Number of pixels to scroll to the right
      behavior: "auto" // Smooth scrolling
    });
  }

  scrollLeft(delta:any) {
    window.scrollBy({
      left: delta, // Number of pixels to scroll to the right
      behavior: "auto" // Smooth scrolling
    });
  }

  scrollRight(delta:any) {
    window.scrollBy({
      left: delta, // Number of pixels to scroll to the right
      behavior: "auto" // Smooth scrolling

    });

  }


  onSwitchLanguage() {
    if (this.imprintComponent) {
      this.imprintComponent.switchLanguage(this.languageService.language);
    }
    if (this.DataprivacyComponent) {
      this.DataprivacyComponent.switchLanguage(this.languageService.language);
    }
  }

  currentRoute: string = '';
  ngOnInit() {
    this.route.params.subscribe(params => {
  });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.updateStylesBasedOnRoute(this.currentRoute);
      }
    });
  }

  updateStylesBasedOnRoute(route: string) {
    // Custom logic to change styles
    const parentElement = document.querySelector('#footer');
    const parentElement2 = document.querySelector('#header');
    if (route === '/') {
      setTimeout(()=>{
        if(this.languageService){
          // this.landingpageComponent.switchLanguage(this.languageService.language)
        }
      },1000)
      parentElement?.classList.add('footerLanding');
      parentElement?.classList.remove('footerImprint');
      parentElement?.classList.remove('footerDataPrivacy');
      parentElement2?.classList.add('headerImprint');
      parentElement2?.classList.remove('headerLanding');
      parentElement2?.classList.remove('headerDataPrivacy');
    } 
    if (route === '/imprint') {
      parentElement?.classList.add('footerImprint');
      parentElement?.classList.remove('footerLanding');
      parentElement?.classList.remove('footerDataPrivacy');
      parentElement2?.classList.add('headerImprint');
      parentElement2?.classList.remove('headerLanding');
      parentElement2?.classList.remove('headerDataPrivacy');
    }
    if (route === '/dataprivacy') {
      parentElement?.classList.add('footerDataPrivacy');
      parentElement?.classList.remove('footerImprint');
      parentElement?.classList.remove('footerLanding');
      parentElement2?.classList.add('headerDataPrivacy');
      parentElement2?.classList.remove('headerLanding');
      parentElement2?.classList.remove('headerDataImprint');
    }
  }
}
