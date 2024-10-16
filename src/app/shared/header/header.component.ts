import { Component, ViewChild, ElementRef, ViewEncapsulation, OnInit, Output, EventEmitter, inject, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../language.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavMenuService } from '../../nav-menu.service';
import { HeaderService } from '../../header.service';
import { NavigationEnd, Router } from '@angular/router';
import { ImprintComponent } from '../../imprint/imprint.component';
import { ImprintService } from '../../imprint.service';
import { DataprivacyService } from '../../dataprivacy.service';
import { GeneralService } from '../../general.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,ImprintComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  providers: [
    LanguageService
  ],
  encapsulation: ViewEncapsulation.None,
  
})
export class HeaderComponent implements OnInit {
  
  generalService = inject(GeneralService) 
  navMenu: SafeHtml | undefined;
  private resizeObserver: ResizeObserver | undefined;

  constructor(private router: Router, private languageService: LanguageService,public navMenuService: NavMenuService, private sanitizer: DomSanitizer,private HeaderService: HeaderService, private ImprintService: ImprintService, private DataPrivacyService: DataprivacyService, private renderer: Renderer2){
    window.addEventListener('resize', this.handleResize);
    this.handleResize()
    this.switchLanguage(this.languageService.language)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Dynamisches Hinzufügen und Entfernen von Klassen basierend auf der Route
        if (event.url === '/imprint') {
          this.navMenuService.site="imprint"
          setTimeout(()=>{
            this.switchLanguage(this.languageService.language)
          },500)
          
        } else if (event.url === '/dataprivacy') {
          this.navMenuService.site="dataprivacy"
        } else {
          this.navMenuService.site="landingpage"
        }
      }
    });
  }

  @Output() switchLanguageEvent = new EventEmitter<void>();

  triggerSwitchLanguage(language:string) {
    this.languageService.language=language
    this.switchLanguageEvent.emit();
  }

  header1=`<div [innerHTML]="header11"><a class="section3" [innerHTML]="header1" (click)="openMenu()">Why me ?</a></div>`
  header2=`<div [innerHTML]="header21"><a class="section4" [innerHTML]="header2" (click)="openMenu()">My Skills</a></div>`
  header3=`<div [innerHTML]="header31"><a class="section5" [innerHTML]="header3" (click)="openMenu()">My Work</a></div>`
  header4=`<div [innerHTML]="header41"><a class="section6" [innerHTML]="header4" (click)="openMenu()">Contact me</a></div>`
  header5=`<div [innerHTML]="header31"><a href="dataprivacy" [innerHTML]="header5" (click)="openMenu()">Legal Notice</a></div>`
  header6=`<div [innerHTML]="header41"><a href="imprint" [innerHTML]="header6" (click)="openMenu()">Imprint</a></div>`
  nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span class="section3">Why me</span></a></div>`
  nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span class="section4">Skills</span></a></div>`
  nav3 = `<div><a href="#section5" (click)="scrollToDiv('section5')"><span class="section5">My Work</span></a></div>`
  nav4 = `<div><a href="#section6" (click)="scrollToDiv('section6')"><span class="section6">Contact</span></a></div>`

  switchLanguageService(language:string){
    this.languageService.language = language
  }

  switchLanguage(language:string){
    // let header1Div = document.getElementById("header1Div")
    // let header2Div = document.getElementById("header2Div")
    let header3Div = document.getElementById("header3Div")
    let header4Div = document.getElementById("header4Div")
    let header5Div = document.getElementById("header5Div")
    let header6Div = document.getElementById("header6Div")

    this.languageService.language = language
    if(language == "en" && this.navMenuService.site == "landingpage"){
      this.header1 = `<div [innerHTML]="header11"><a class="section3" [innerHTML]="header1" (click)="openMenu()">Why me ?</a></div>`
      this.header2 = `<div [innerHTML]="header21"><a class="section4" [innerHTML]="header2" (click)="openMenu()">My Skills</a></div>`
      this.header3 = `<div [innerHTML]="header31"><a class="section5" [innerHTML]="header3" (click)="openMenu()">My Work</a></div>`
      this.header4 = `<div [innerHTML]="header41"><a class="section6" [innerHTML]="header4" (click)="openMenu()">Contact me</a></div>`
      this.header5 = `<div [innerHTML]="header31"><a href="dataprivacy" [innerHTML]="header5" (click)="openMenu()">Legal Notice</a></div>`
      this.header6 = `<div [innerHTML]="header41"><a href="imprint" [innerHTML]="header6" (click)="openMenu()">Imprint</a></div>`
      this.nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span class="section3">Why me</span></a></div>`
      this.nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span class="section4">Skills</span></a></div>`
      this.nav3 = `<div><a href="#section5" (click)="scrollToDiv('section5')"><span class="section5">My Work</span></a></div>`
      this.nav4 = `<div><a href="#section6" (click)="scrollToDiv('section6')"><span class="section6">Contact</span></a></div>`
      if(header3Div && header4Div && header5Div && header6Div){
        header3Div.style.display="flex"
        header4Div.style.display="flex"
        header5Div.style.display="flex"
        header6Div.style.display="flex"
      }
    }
    if(language == "de" && this.navMenuService.site == "landingpage"){
      this.header1 = `<div [innerHTML]="header11"><a class="section3" [innerHTML]="header1" (click)="openMenu()">Wieso ich ?</a></div>`
      this.header2 = `<div [innerHTML]="header21"><a class="section4" [innerHTML]="header2" (click)="openMenu()">Meine Skills</a></div>`
      this.header3 = `<div [innerHTML]="header31"><a class="section5" [innerHTML]="header3" (click)="openMenu()">Meine Werke</a></div>`
      this.header4 = `<div [innerHTML]="header41"><a class="section6" [innerHTML]="header4" (click)="openMenu()">Kontakt</a></div>`
      this.header5 = `<div [innerHTML]="header31"><a href="dataprivacy" [innerHTML]="header5" (click)="openMenu()">Datenschutz</a></div>`
      this.header6 = `<div [innerHTML]="header41"><a href="imprint" [innerHTML]="header6" (click)="openMenu()">Impressum</a></div>`
      this.nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span>Wieso ich ?</span></a></div>`
      this.nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span>Meine Skills</span></a></div>`
      this.nav3 = `<div><a href="#section5" (click)="scrollToDiv('section5')"><span>Meine Werke</span></a></div>`
      this.nav4 = `<div><a href="#section6" (click)="scrollToDiv('section6')"><span>Kontakt</span></a></div>`
      if(header3Div && header4Div && header5Div && header6Div){
        header3Div.style.display="flex"
        header4Div.style.display="flex"
        header5Div.style.display="flex"
        header6Div.style.display="flex"
      }
    }
    
    if(language == "en" && this.navMenuService.site == "imprint"){
      this.header1 = `<div [innerHTML]="header11"><a href="" [innerHTML]="header1" (click)="openMenu()">Landing Page</a></div>`
      this.header2 = `<div [innerHTML]="header11"><a href="dataprivacy" [innerHTML]="header2" (click)="openMenu()">Legal Notice</a></div>`
      this.header3 = ``
      this.header4 = ``
      this.header5 = ``
      this.header6 = ``
      this.nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span>Landing Page</span></a></div>`
      this.nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span>Legal Notice</span></a></div>`
      if(header3Div && header4Div && header5Div && header6Div){
        header3Div.style.display="none"
        header4Div.style.display="none"
        header5Div.style.display="none"
        header6Div.style.display="none"
      }
    }
    if(language == "de" && this.navMenuService.site == "imprint"){
      this.header1 = `<div [innerHTML]="header11"><a href="" [innerHTML]="header1" (click)="openMenu()">Startseite</a></div>`
      this.header2 = `<div [innerHTML]="header11"><a href="dataprivacy" [innerHTML]="header2" (click)="openMenu()">Datenschutz</a></div>`
      this.header3 = ``
      this.header4 = ``
      this.header5 = ``
      this.header6 = ``
      this.nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span>Startseite</span></a></div>`
      this.nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span>Datenschutz</span></a></div>`
      if(header3Div && header4Div && header5Div && header6Div){
        header3Div.style.display="none"
        header4Div.style.display="none"
        header5Div.style.display="none"
        header6Div.style.display="none"
      }
    }

    if(language == "en" && this.navMenuService.site == "dataprivacy"){
      this.header1 = `<div [innerHTML]="header11"><a href="" [innerHTML]="header1" (click)="openMenu()">Landing Page</a></div>`
      this.header2 = `<div [innerHTML]="header11"><a href="imprint" [innerHTML]="header2" (click)="openMenu()">Imprint</a></div>`
      this.header3 = ``
      this.header4 = ``
      this.header5 = ``
      this.header6 = ``
      this.nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span>Landing Page</span></a></div>`
      this.nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span>Imprint</span></a></div>`
      if(header3Div && header4Div && header5Div && header6Div){
        header3Div.style.display="none"
        header4Div.style.display="none"
        header5Div.style.display="none"
        header6Div.style.display="none"
      }
    }

    if(language == "de" && this.navMenuService.site == "dataprivacy"){
      this.header1 = `<div [innerHTML]="header11"><a href="" [innerHTML]="header1" (click)="openMenu()">Startseite</a></div>`
      this.header2 = `<div [innerHTML]="header11"><a href="imprint" [innerHTML]="header2" (click)="openMenu()">impressum</a></div>`
      this.header3 = ``
      this.header4 = ``
      this.header5 = ``
      this.header6 = ``
      this.nav1 = `<div><a href="#section3" (click)="scrollToDiv('section3')"><span>Startseite</span></a></div>`
      this.nav2 = `<div><a href="#section4" (click)="scrollToDiv('section4')"><span>Impressum</span></a></div>`
      if(header3Div && header4Div && header5Div && header6Div){
        header3Div.style.display="none"
        header4Div.style.display="none"
        header5Div.style.display="none"
        header6Div.style.display="none"
      } 
    }
  } 
  
  ngOnInit() {
    this.navMenuService.menu$.subscribe(menu => {
      this.navMenu = this.sanitizeHtml(menu); // Update navMenu when it changes
    });
    this.navMenuService.menuMobile$.subscribe(menuMobile => {
      this.navMenu = this.sanitizeHtml(menuMobile); // Update navMenu when it changes
    });
    this.HeaderService.languageSwitch$.subscribe((language) => {
      this.switchLanguage(language);
    }); 
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('section3')) {
      this.scrollToDiv("section3");
    }
    if (target.classList.contains('section4')) {
      this.scrollToDiv("section4");
    }
    if (target.classList.contains('section5')) {
      this.scrollToDiv("section5");
    }
    if (target.classList.contains('section6')) {
      this.scrollToDiv("section6");
    }
  }
  
  @ViewChild('videoHeader', { static: false }) videoHeader!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.videoLoop()
    this.handleResize()
    setInterval(()=>{
      this.switchLanguage(this.languageService.language)
    },10)
  }

  videoLoop() {
    const video = this.videoHeader.nativeElement;  
    video.onloadedmetadata = () => {
      const duration = video.duration * 1000; // Convert to milliseconds
      setInterval(() => {
        video.play();
      }, duration);
    };
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
        this.resizeObserver.disconnect();
    }
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const width = window.innerWidth;
    let navMenuPoints = document.getElementById("navMenuPoints")
    let menu = document.getElementById("menuButton")
    if(navMenuPoints && menu){
      if(width <= 860){
        navMenuPoints.style.display = "none"
        menu.style.display = "flex"
      }else{
        navMenuPoints.style.display = "flex"
        menu.style.display = "none"
        this.isMenuVisible = false
      }   
    };
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
  Menu = document.getElementById("menu");
  isMenuVisible = false

  openMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  scrollToDiv(section:string): void {
    if(section == "section2" && this.navMenuService.site !== "landingpage"){
      window.location.href = ""
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
