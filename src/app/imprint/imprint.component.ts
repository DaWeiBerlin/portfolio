import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppComponent } from "../app.component";
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';
import { NavMenuService } from '../nav-menu.service';
import { ImprintService } from '../imprint.service';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.sass',
  providers:[LandingpageComponent,HeaderComponent],
  encapsulation: ViewEncapsulation.None
})
export class ImprintComponent{
  
  constructor(private languageService: LanguageService,private navMenuService:NavMenuService,private imprintService: ImprintService,private LandingPageComponent:LandingpageComponent, private HeaderComponent: HeaderComponent) {
    let language: string | null = (localStorage.getItem("language"))
    if(language == null){
      this.switchLanguage(this.languageService.language)
    }else if(localStorage.getItem("language")){
      this.switchLanguage(language)
      this.languageService.language = language
    }
    this.changeMenu()
    this.changeMenuMobile()
    this.add()
    this.navMenuService.site = "imprint"
    this.loop()
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize(){
    this.changeMenu()
  }

  loop(){
    setInterval(()=>{
      this.switchLanguage(this.languageService.language)
    },100)
  }

  add(){
    window.addEventListener('DOMContentLoaded', () => {
        // Select the div element and cast it as HTMLDivElement
        const divElement = document.getElementById('de') as HTMLDivElement;
  
        // Add a click event listener to the div
        divElement.addEventListener('click', () => {
          this.languageService.language="de"
          this.navMenuService.switchLanguage("de")
          this.switchLanguage("de")
          this.changeMenu()
        });
    });
    window.addEventListener('click', () => {
      // TypeScript code starts here
      
      // Select the div element and cast it as HTMLDivElement
      const divElement = document.getElementById('de') as HTMLDivElement;

      // Add a click event listener to the div
      divElement.addEventListener('click', () => {
        this.languageService.language="de"
        this.navMenuService.switchLanguage("de")
        this.switchLanguage("de")
        this.changeMenu()
      });
    });
    window.addEventListener('DOMContentLoaded', () => {
      // TypeScript code starts here
      
      // Select the div element and cast it as HTMLDivElement
      const divElement = document.getElementById('en') as HTMLDivElement;

      // Add a click event listener to the div
      divElement.addEventListener('click', () => {
        this.languageService.language="en"
        this.navMenuService.switchLanguage("en")
        this.changeMenu()
        this.switchLanguage("en")
        
      });
    });
    window.addEventListener('click', () => {
      // TypeScript code starts here
      
      // Select the div element and cast it as HTMLDivElement
      const divElement = document.getElementById('en') as HTMLDivElement;

      // Add a click event listener to the div
      divElement.addEventListener('click', () => {
        this.languageService.language="en"
        this.navMenuService.switchLanguage("en")
        this.changeMenu()
        this.switchLanguage("en")
        
      });
    });
  }
  
  changeMenu() {
    let newMenu = ""
    if(this.languageService.language == "de"){
      newMenu = `
      
      <div [innerHTML]="nav1">
        <a href="dataprivacy" class="dataprivacy">
          <span>Datenschutz</span>
        </a>
      </div>
      <div [innerHTML]="nav2">
        <a href="" [ngStyle]="{'color':'black'}" class="dataprivacy">
          <span>Startseite</span>
        </a>
      </div>
      <div id="navLanguage">
        <div id="de">DE</div>
        <div id="verticalLine"></div>
        <div id="en">EN</div>
      </div>
      `;
      this.navMenuService.updateMenu(newMenu); // Update the menu through the service
    }
    if(this.languageService.language == "en"){
      newMenu = `
      
      <div [innerHTML]="nav1">
        <a href="dataprivacy" class="dataprivacy">
          <span>Privacy Policy</span>
        </a>
      </div>
      <div [innerHTML]="nav2">
        <a href="" [ngStyle]="{'color':'black'}" class="dataprivacy">
          <span>Landing Page</span>
        </a>
      </div>
      <div id="navLanguage">
        <div id="de">DE</div>
        <div id="verticalLine"></div>
        <div id="en">EN</div>
      </div>
      `;
      this.navMenuService.updateMenu(newMenu); // Update the menu through the service
    }
  }
    changeMenuMobile() {
    let newMenu =""
    let language = this.languageService.language 
    if(language == "de"){
      newMenu = 
      `<div id="dataprivacy">
        <div><a href="">Startseite</a></div>
        <div><a href="dataprivacy">Datenschutz</a></div>
      </div>
      <div>
        <div id="de" (click)="triggerSwitchLanguage('de')">DE</div>
        <div id="verticalLine"></div>
        <div id="en" (click)="triggerSwitchLanguage('en')">EN</div>
      </div>
    `;
    }
    if(language= "en"){
      newMenu = 
      `<div id="dataprivacy">
        <div><a href="">Landing Page</a></div>
        <div><a href="dataprivacy">Dataprivacy</a></div>
      </div>
      <div>
        <div id="de" (click)="triggerSwitchLanguage('de')">DE</div>
        <div id="verticalLine"></div>
        <div id="en" (click)="triggerSwitchLanguage('en')">EN</div>
      </div>
    `
    }
    ;
    this.navMenuService.updateMenuMobile(newMenu); // Update the menu through the service
  }

  ngOnInit() {
    this.navMenuService.site = "imprint"
    // Subscribe to language changes
  }

  imprintTitle=""
  imprint1=""
  imprint2=""
  imprint3=""
  imprint4=""
  imprint5=""
  imprint6=""
  switchLanguage(language:string){
    localStorage.setItem("language",language)
    this.languageService.language = language
    if(language == "en"){
      this.imprintTitle = `Imprint`
      this.imprint1=`David Victor Markus Burkert<br />
            Kamorstra&szlig;e 35<br />
            c/o Schmid<br />
            78464 Konstanz`
      this.imprint2=`Contact`
      this.imprint3=`Phone: 015210577309<br />
            Fax: -<br />
            E-Mail: davidburkert&#64;outlook.com`
      this.imprint4=`Editorially Responsible`
      this.imprint5=`David Burkert<br />
            Kamorstra&szlig;e 35<br />
            78464 Konstanz`
      this.imprint6=`Source: <a  href="https://www.e-recht24.de">https://www.e-recht24.de</a>`
      
    }
    if(language == "de"){
      this.imprintTitle = `Impressum`
      this.imprint1=`David Victor Markus Burkert<br />
            Kamorstra&szlig;e 35<br />
            c/o Schmid<br />
            78464 Konstanz`
      this.imprint2=`Contact`
      this.imprint3=`Phone: 015210577309<br />
            Fax: -<br />
            E-Mail: davidburkert&#64;outlook.com`
      this.imprint4=`Redaktionell Verantwortlicher`
      this.imprint5=`David Burkert<br />
            Kamorstra&szlig;e 35<br />
            78464 Konstanz`
      this.imprint6=`Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>`
    }
  }
  

}
