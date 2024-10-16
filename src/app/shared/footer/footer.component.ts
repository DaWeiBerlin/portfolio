import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GeneralService } from '../../general.service';
import { LanguageService } from '../../language.service';
import { NavMenuService } from '../../nav-menu.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

  site= ""
  language:string|null = "en"
  oldLanguage = "en"
  windowInnerWidth:number = window.innerWidth

  constructor(private languageService:LanguageService, private NavMenuService:NavMenuService){
    this.language = (localStorage.getItem("language"))
    if(this.language){
      this.languageService.language = this.language
    }else{
      this.languageService.language = "en"
    }
    this.oldLanguage = this.languageService.language
    this.switchLanguage(this.languageService.language)
    window.addEventListener("resize",this.handleResize)
    this.LanguageLoop()
    console.log(this.windowInnerWidth)
  }

  @ViewChild('myVideo', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.videoLoop()    
  }
  
  LanguageLoop(){
    setInterval(()=>{
      this.switchLanguage(this.languageService.language)
    },100)
  }

  videoLoop() {
    const video = this.videoElement.nativeElement;  
    video.onloadedmetadata = () => {
      const duration = video.duration * 1000; // Convert to milliseconds
      setInterval(() => {
        video.play();
      }, duration);
    };
  }

  handleResize(){
    this.windowInnerWidth = window.innerWidth
  }

  footer1 = '<a href="imprint">Imprint</a>'
  footer2 = '<a href="dataprivacy">Legal Notice</a>'
  switchLanguage(language:string){
    this.site = this.NavMenuService.site
    if(language == "en" && this.site =="landingpage"){
      this.footer1='<a class="footerLink" href="imprint">Imprint</a>'
      this.footer2='<a class="footerLink" href="dataprivacy">Legal Notice</a>'
    }else if(language == "en" && this.site =="dataprivacy"){
      this.footer1='<a class="footerLink" href="">Landing Page</a>'
      this.footer2='<a class="footerLink" href="imprint">Imprint</a>'
    }else if(language == "en" && this.site =="imprint"){
      this.footer1='<a class="footerLink" href="">Landing Page</a>'
      this.footer2='<a class="footerLink" href="dataprivacy">Legal Notice</a>'
    }else if(language == "de" && this.site =="landingpage"){
      this.footer1='<a class="footerLink" href="imprint">Impressum</a>'
      this.footer2='<a class="footerLink" href="dataprivacy">Datenschutz</a>'
    }else if(language == "de" && this.site =="dataprivacy"){
      this.footer1='<a class="footerLink" href="">Startseite</a>'
      this.footer2='<a class="footerLink" href="imprint">Impressum</a>'
    }else if(language == "de" && this.site =="imprint"){
      this.footer1='<a class="footerLink" href="">Startseite</a>'
      this.footer2='<a class="footerLink" href="dataprivacy">Datenschutz</a>'
    }
    let Links = document.querySelectorAll(".footerLink")
    if (Links) {
      Links.forEach(link => {
        (link as HTMLElement).style.color = "#4A4A4A";
        (link as HTMLElement).style.textDecoration = "none";
      });
    }
  }
}
