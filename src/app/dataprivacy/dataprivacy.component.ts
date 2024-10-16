import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, OnInit, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';
import { AppComponent } from '../app.component';
import { NavMenuService } from '../nav-menu.service';
import { DataprivacyService } from '../dataprivacy.service';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { HeaderComponent } from '../shared/header/header.component';
import { GeneralService } from '../general.service';


@Component({
  selector: 'app-dataprivacy',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './dataprivacy.component.html',
  styleUrl: './dataprivacy.component.sass',
  providers:[AppComponent,HeaderComponent,LandingpageComponent],
  encapsulation: ViewEncapsulation.None
})
export class DataprivacyComponent {
  generalService = inject(GeneralService) 
  constructor(private languageService: LanguageService,private AppComponent:AppComponent,private navMenuService:NavMenuService, private DataprivacyService:DataprivacyService,private LandingPageComponent:LandingpageComponent){
    
    let language: string | null = (localStorage.getItem("language"))
    if(language == null){
      this.switchLanguage(this.languageService.language)
    }else if(localStorage.getItem("language")){
      this.switchLanguage(language)
      this.languageService.language = language
    }
    this.changeMenu()
    this.changeMenuMobile()
    this.add2()
    this.loop()
    this.loop2()
    window.addEventListener('resize', () => this.handleResize());
    this.navMenuService.site = "dataprivacy"    
  }

  handleResize(){
    this.changeMenu()
    this.add2()
    const divElement = document.getElementById('de2') as HTMLDivElement;
    divElement.addEventListener('click', () => {
      this.languageService.language="de"
      this.navMenuService.switchLanguage("de")
      this.switchLanguage("de")
      this.changeMenu()
    });
    const divElement2 = document.getElementById('en2') as HTMLDivElement;
      divElement2.addEventListener('click', () => {
        this.languageService.language="en"
        this.navMenuService.switchLanguage("en")
        this.changeMenu()
        this.switchLanguage("en")
        
      });
  }

  loop2(){
    setInterval(()=>{
      this.switchLanguage(this.languageService.language)
    },10)
  }
  

  add2(){
    window.addEventListener('DOMContentLoaded', () => {
        const divElement = document.getElementById('de2') as HTMLDivElement;  
        divElement.addEventListener('click', () => {
          this.languageService.language="de"
          this.navMenuService.switchLanguage("de")
          this.switchLanguage("de")
          this.changeMenu()
        });
    });
    window.addEventListener('click', () => {
      const divElement = document.getElementById('de2') as HTMLDivElement;
      divElement.addEventListener('click', () => {
        this.languageService.language="de"
        this.navMenuService.switchLanguage("de")
        this.switchLanguage("de")
        this.changeMenu()
      });
    });
    window.addEventListener('DOMContentLoaded', () => {      
      const divElement = document.getElementById('en2') as HTMLDivElement;
      divElement.addEventListener('click', () => {
        this.languageService.language="en"
        this.navMenuService.switchLanguage("en")
        this.changeMenu()
        this.switchLanguage("en")
        
      });
    });
    window.addEventListener('click', () => {
      const divElement = document.getElementById('en2') as HTMLDivElement;
      divElement.addEventListener('click', () => {
        this.languageService.language="en"
        this.navMenuService.switchLanguage("en")
        this.changeMenu()
        this.switchLanguage("en")
      });
    });
  }
  

  ngAfterViewInit(): void {
    this.switchLanguage(this.languageService.language);
  }

  loop(){
    let child = document.getElementById('firstLevelDataPrivacy');
    let parent = document.getElementById('main');

    if(parent && child){
      parent.style.height =  (child.scrollHeight) + "px"
      }
    
    setTimeout(()=>{
      this.loop()} ,50)
  }
  
  Test = 1
  newMenu =""
  changeMenu() {
    
    let language = this.languageService.language 
    if(language == "de"){
      this.newMenu = `
    <div [innerHTML]="nav1">
      <a href="imprint" class="dataprivacy">
        <span>Impressum</span>
      </a>
    </div>
    <div [innerHTML]="nav2">
      <a href="" [ngStyle]="{'color':'black'}" class="dataprivacy">
        <span>Startseite</span>
      </a>
    </div>
    <div id="navLanguage">
      <div id="de2" class="Language (click)="switchLanguageService('de')">DE</div>
      <div id="verticalLine"></div>
      <div id="en2" class="Language (click)="switchLanguageService('en')">EN</div>
    </div>
    `;}
    if(language== "en"){
      this.newMenu = `
    <div [innerHTML]="nav1">
      <a href="imprint" class="dataprivacy">
        <span>Imprint</span>
      </a>
    </div>
    <div [innerHTML]="nav2">
      <a href="" [ngStyle]="{'color':'black'}" class="dataprivacy">
        <span>Landing Page</span>
      </a>
    </div>
    <div id="DataPrivacyHeader">
      <div id="de2" class="Language" (click)="switchLanguageService('de')">DE</div>
      <div id="verticalLine"></div>
      <div id="en2" class="Language" (click)="switchLanguageService('en')">EN</div>
    </div>
    `;}
    this.navMenuService.updateMenu(this.newMenu); // Update the menu through the service
  }

  changeMenuMobile() {
    let newMenu =""
    let language = this.languageService.language 
    if(language == "de"){
      newMenu = 
      `<div id="dataprivacy">
        <div><a href="">Startseite</a></div>
        <div><a href="imprint">Impressum</a></div>
      </div>
      <div>
        <div (click)="this.LandingPageComponent.switchLanguage('de')">DE</div>
        <div id="verticalLine"></div>
        <div (click)="this.LandingPageComponent.switchLanguage('en')">EN</div>
      </div>
    `;
    }
    if(language= "en"){
      newMenu = ` 
      <div id="dataprivacy">
        <div><a href="">Landing Page</a></div>
        <div><a href="imprint">Imprint</a></div>
      </div>
      <div>
        <div (click)="this.LandingPageComponent.switchLanguage('de')">DE</div>
        <div id="verticalLine"></div>
        <div (click)="this.LandingPageComponent.switchLanguage('en')">EN</div>
      </div>`
    };
    this.navMenuService.updateMenuMobile(newMenu); // Update the menu through the service
  }


  privacyPolicyTitle=``
  privacyPolicy1=``
  privacyPolicy2=``
  privacyPolicy3=``
  privacyPolicy4=``
  privacyPolicy5=``
  privacyPolicy6=``
  privacyPolicy7=``
  privacyPolicy8=``
  privacyPolicy9=``
  privacyPolicy10=``
  privacyPolicy11=``
  privacyPolicy12=``
  privacyPolicy13=``
  privacyPolicy14=``
  privacyPolicy15=``
  privacyPolicy16=``
  privacyPolicy17=``
  privacyPolicy18=``
  privacyPolicy19=``
  privacyPolicy20=``
  privacyPolicy21=``
  privacyPolicy22=``
  privacyPolicy23=``
  privacyPolicy24=``
  privacyPolicy25=``
  privacyPolicy26=``
  privacyPolicy27=``


  ngOnInit() {
    this.navMenuService.site = "dataprivacy"
    this.DataprivacyService.languageSwitch$.subscribe((language) => {
      this.switchLanguage(language);
    });
  }

  switchLanguage(language:string){
    this.languageService.language=language
    localStorage.setItem("language",language)
    if(language == "en"){
      this.privacyPolicyTitle=`Privacy Policy`
      this.privacyPolicy1=`1. Data Protection at a Glance`
      this.privacyPolicy2=`General Information`
      this.privacyPolicy3=`The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. Detailed information on the subject of data protection can be found in our privacy policy provided below this text.`
      this.privacyPolicy4=`Data Collection on This Website`
      this.privacyPolicy5=`Who is responsible for data collection on this website?`
      this.privacyPolicy6=`Data processing on this website is carried out by the website operator. You can find the operator's contact details in the section "Notice to the Responsible Party" in this privacy policy.`
      this.privacyPolicy7=`How do we collect your data?`
      this.privacyPolicy8=`Your data is collected in part by you providing it to us. This may include data that you enter into a contact form, for example.`
      this.privacyPolicy9=`Other data is collected automatically or with your consent when you visit the website by our IT systems. This mainly includes technical data (e.g., internet browser, operating system, or time of page access).`
      this.privacyPolicy10=`2. Hosting`
      this.privacyPolicy11=`External Hosting`
      this.privacyPolicy12=`This website is hosted externally. The personal data collected on this website is stored on the servers of the host. Hosting provider:`
      this.privacyPolicy13=`Cyberse GmbH & Co. KG<br>
        Arzbergweg 39<br>
        91217 Hersbruck<br>
        Germany`
      this.privacyPolicy14="3. General Information and Mandatory Information"
      this.privacyPolicy15="Data Protection"
      this.privacyPolicy16="The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy."
      this.privacyPolicy17="4. Own Services"
      this.privacyPolicy18="OneDrive"
      this.privacyPolicy19="We have integrated OneDrive on this website. The provider is Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland."
      this.privacyPolicy20=`Credits`
      this.privacyPolicy21=`Html icon created by Nhor Phai - Flaticon`
      this.privacyPolicy22=`Video made by <a href="https://pixabay.com/de/users/_tahasultan-38648977/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=174778">Taha Sultan</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=174778">Pixabay</a>`
      this.privacyPolicy23=`Video made by <a href="https://pixabay.com/de/users/leolo212-15013188/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=225581">Antonio López</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=225581">Pixabay</a>`
      this.privacyPolicy24=`Video made by <a href="https://pixabay.com/de/users/mohamed_hassan-5229782/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=144307">Mohamed Hassan</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=144307">Pixabay</a>`
      this.privacyPolicy25=`Video made by <a href="https://pixabay.com/de/users/lofiplace-35873928/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=187387">LofiPlace</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=187387">Pixabay</a>`
      this.privacyPolicy26=`Video made by <a href="https://pixabay.com/de/users/magicmore-37989617/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=169443">Igor Pahomov</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=169443">Pixabay</a>`
      this.privacyPolicy27="&copy; 2024 Portfolio Design Gallery"
    }
    if(language == "de"){
      this.privacyPolicyTitle=`Datenschutzerklärung`
      this.privacyPolicy1=`1. Datenschutz auf einen Blick`
      this.privacyPolicy2=`Allgemeine Hinweise`
      this.privacyPolicy3=`Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.`
      this.privacyPolicy4=`Datenerfassung auf dieser Website`
      this.privacyPolicy5=`Wer ist verantwortlich für die Datenerfassung auf dieser Website?`
      this.privacyPolicy6=`Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.`
      this.privacyPolicy7=`Wie erfassen wir Ihre Daten?`
      this.privacyPolicy8=`Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.`
      this.privacyPolicy9=`Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).`
      this.privacyPolicy10=`2. Hosting`
      this.privacyPolicy11=`Externes Hosting`
      this.privacyPolicy12=`Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hosting-Anbieter:`
      this.privacyPolicy13=`Cyberse GmbH & Co. KG<br>
        Arzbergweg 39<br>
        91217 Hersbruck<br>
        Germany`
      this.privacyPolicy14="3. Allgemeine Hinweise und Pflichtinformationen"
      this.privacyPolicy15="Datenschutz"
      this.privacyPolicy16="Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."
      this.privacyPolicy17="4. Eigene Dienste"
      this.privacyPolicy18="OneDrive"
      this.privacyPolicy19="Wir haben OneDrive auf dieser Website eingebunden. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland."
      this.privacyPolicy20=`Credits`
      this.privacyPolicy21=`HTML-Icon wurde erstellt von Nhor Phai - Flaticon`
      this.privacyPolicy22=`Video gedreht von <a href="https://pixabay.com/de/users/_tahasultan-38648977/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=174778">Taha Sultan</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=174778">Pixabay</a>`
      this.privacyPolicy23=`Video gedreht von <a href="https://pixabay.com/de/users/leolo212-15013188/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=225581">Antonio López</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=225581">Pixabay</a>`
      this.privacyPolicy24=`Video gedreht von <a href="https://pixabay.com/de/users/mohamed_hassan-5229782/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=144307">Mohamed Hassan</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=144307">Pixabay</a>`
      this.privacyPolicy25=`Video gedreht von <a href="https://pixabay.com/de/users/lofiplace-35873928/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=187387">LofiPlace</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=187387">Pixabay</a>`
      this.privacyPolicy26=`Video gedreht von <a href="https://pixabay.com/de/users/magicmore-37989617/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=169443">Igor Pahomov</a> / <a color="anchor" href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=169443">Pixabay</a>`
      this.privacyPolicy27="&copy; 2024 Portfolio Design Gallery"
    }
  }
}

