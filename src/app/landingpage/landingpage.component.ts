import { CommonModule } from '@angular/common';
import { Component, OnInit,Renderer2, ElementRef, ViewChild, OnDestroy, AfterViewInit, Inject, HostBinding, inject, HostListener } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavMenuService } from '../nav-menu.service';
import { LandingpageService } from '../landingpage.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderService } from '../header.service';
import { filter } from 'rxjs/operators';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule,ContactFormComponent,FormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.sass',
  providers: [
    LanguageService,
    HeaderComponent
     // added class in the providers
  ]
})
export class LandingpageComponent implements OnDestroy, OnInit, AfterViewInit {
  generalService = inject(GeneralService) 

  languageConstructor = "en"
  constructor(private renderer: Renderer2,private languageService: LanguageService,private router: Router,private navMenuService:NavMenuService,private LandingpageService:LandingpageService,private sanitizer: DomSanitizer, private HeaderComponent:HeaderComponent, private HeaderService:HeaderService) {
    this.mailtoLink = this.sanitizer.bypassSecurityTrustUrl('mailto:' + this.email);
  }

  @HostBinding('attr.id') id = 'App';
  languageLanding = "en"
  email: string = "davidburkert@outlook.com";
  mailtoLink: SafeUrl;
  currentRoute: string = '';
  @ViewChild('GitHubButton1') GitHubButton1!: ElementRef;
  @ViewChild('GitHubButton2') GitHubButton2!: ElementRef;
  @ViewChild('GitHubButton3') GitHubButton3!: ElementRef;
  @ViewChild('GitHubButton4') GitHubButton4!: ElementRef;
  @ViewChild('LiveTestButton1') LiveTestButton1!: ElementRef;
  @ViewChild('LiveTestButton2') LiveTestButton2!: ElementRef;
  @ViewChild('LiveTestButton3') LiveTestButton3!: ElementRef;
  @ViewChild('LiveTestButton4') LiveTestButton4!: ElementRef;
  @ViewChild('SendButton') SendButton!: ElementRef;

  @HostListener('document:wheel', ['$event'])
  public onWheel(event: WheelEvent) {
    if(this.navMenuService.site == "landingpage" && window.innerWidth > 1350){
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

  
    // Method to scroll the window to the right
    
  
      // Dispatch the event to the document or a specific element
      
   


  switchLandingLanguage(){
    if(this.languageLanding == "de"){
      this.languageLanding = "en"
    }else{
      this.languageLanding = "de"
    }
  }

  handleResize = () => {
    let section6Title = document.getElementById("section6Title")
    if(section6Title){
      if(this.languageService.language == "de"){
        if(window.innerWidth <= 860){
          section6Title.style.setProperty('top', '-180px', 'important');
          section6Title.style.setProperty('left', '20px', 'important'); 
        }else if(window.innerWidth <= 1050){
          section6Title.style.setProperty('top', '35px', 'important');
          section6Title.style.setProperty('left', '30px', 'important');
        }else if(window.innerWidth <= 1100){
          section6Title.style.setProperty('top', '35px', 'important');
          section6Title.style.setProperty('left', '70px', 'important');
        }else if(window.innerWidth <= 1350 && window.innerWidth > 1100){
          section6Title.style.setProperty('top', '272px', 'important');
          section6Title.style.setProperty('left', '-140px', 'important');
        }else if(window.innerWidth > 1350 && window.innerHeight <= 1080){
          section6Title.style.setProperty('top', 'calc(17.33% + 100px)', 'important');
          section6Title.style.setProperty('left', '100px', 'important');
        }else if(window.innerWidth > 1350 && window.innerHeight > 1080){
          section6Title.style.setProperty('top', 'calc(17.33% + 188px)', 'important');
          section6Title.style.setProperty('left', '100px', 'important');
        }
      }else if(this.languageService.language =="en"){
        if(window.innerWidth <= 860){
          section6Title.style.setProperty('top', '-180px', 'important');
          section6Title.style.setProperty('left', '20px', 'important'); 
        }else if(window.innerWidth <= 1050){
          section6Title.style.setProperty('top', '35px', 'important');
          section6Title.style.setProperty('left', '30px', 'important');
        }else if(window.innerWidth <= 1100){
          section6Title.style.setProperty('top', '35px', 'important');
          section6Title.style.setProperty('left', '70px', 'important');
        }else if(window.innerWidth <= 1350 && window.innerWidth > 1100){
          section6Title.style.setProperty('top', '225px', 'important');
          section6Title.style.setProperty('left', '-95px', 'important');
        }else if(window.innerWidth > 1350 && window.innerHeight <= 1080){
          section6Title.style.setProperty('top', 'calc(17.33% + 50px)', 'important');
          section6Title.style.setProperty('left', '100px', 'important');
        }else if(window.innerWidth > 1350 && window.innerHeight > 1080){
          section6Title.style.setProperty('top', 'calc(17.33% + 135px)', 'important');
          section6Title.style.setProperty('left', '155px', 'important');
        }
      }
    }
    
    

    
    
    const width = window.innerWidth;  
    let buttonArea1 = document.getElementById("ButtonArea1")
    let buttonArea2 = document.getElementById("ButtonArea2")
    let buttonArea3 = document.getElementById("ButtonArea3")
    let buttonArea4 = document.getElementById("ButtonArea4")
    let project1:HTMLElement | null = document.getElementById("Project1")
    let project2:HTMLElement | null = document.getElementById("Project2")
    let project3:HTMLElement | null = document.getElementById("Project3")
    let project4:HTMLElement | null = document.getElementById("Project4")
      if(width <= 860){ 
        // document.querySelectorAll<HTMLElement>('*').forEach((el: HTMLElement) => {
        //   if (el.offsetWidth > window.innerWidth) {
        //     console.log(el);
        //   }
        // });
        // document.querySelectorAll<HTMLElement>('*').forEach((el: HTMLElement) => {
        //   const rect = el.getBoundingClientRect();
          
        //   // Get computed styles for the element
        //   const style = window.getComputedStyle(el);
          
        //   // Parse padding values
        //   const paddingTop = parseFloat(style.paddingTop);
        //   const paddingRight = parseFloat(style.paddingRight);
        //   const paddingBottom = parseFloat(style.paddingBottom);
        //   const paddingLeft = parseFloat(style.paddingLeft);
          
        //   // Adjusted values considering padding
        //   const adjustedRight = rect.right + paddingRight;
        //   const adjustedLeft = rect.left - paddingLeft;
        //   const adjustedTop = rect.top - paddingTop;
        //   const adjustedBottom = rect.bottom + paddingBottom;
        //   console.log(rect.bottom + paddingBottom)
        
        //   // Check if the element exceeds the right edge
        //   if (adjustedRight > window.innerWidth) {
        //     console.log('Element exceeds right edge:', el);
        //   }
        
        //   // Check if the element exceeds the left edge
        //   if (adjustedLeft < 0) {
        //     console.log('Element exceeds left edge:', el);
        //   }
        
        //   // Check if the element exceeds the top edge
        //   if (adjustedTop < 0) {
        //     console.log('Element exceeds top edge:', el);
        //   }
        
        //   // Check if the element exceeds the bottom edge
        //   if (adjustedBottom > window.innerHeight) {
        //     console.log('Element exceeds bottom edge:', el);
        //   }
        // });
        // const elements = document.querySelectorAll<HTMLElement>('*');
        // elements.forEach((el: HTMLElement) => {
        //   const rect = el.getBoundingClientRect();
          
        //   // Check if the element's right edge extends beyond the viewport width
        //   if (rect.right > window.innerWidth || rect.left < 0) {
        //     const overflowX = document.documentElement.scrollWidth > window.innerWidth;
            
        //     if (overflowX) {
        //       console.log('Element causing right-side gap or horizontal overflow:', el);
        //     }
        //   }
        // });
        this.show1 = true
        this.show2 = true
        this.show3 = true
        this.show4 = true
        if(buttonArea1 && buttonArea2 && buttonArea3 && buttonArea4){
          if(this.languageService.language == "en"){
            buttonArea1.style.top = "377px"
            buttonArea2.style.top = "360px"
            buttonArea3.style.top = "360px"
            buttonArea4.style.top = "370px"
            if(!this.showMenu1 && project1){
              project1.style.height = "800px"
            }
            if(!this.showMenu2 && project2){
              project2.style.height = "780px"
            }
            if(!this.showMenu3 && project3){
              project3.style.height = "780px"
            }
            if(!this.showMenu4 && project4){
              project4.style.height = "780px"
            }
            if(this.showMenu1 && project1){
              project1.style.height = "max-content"
            }
            if(this.showMenu2 && project2){
              project2.style.height = "max-content"
            }
            if(this.showMenu3 && project3){
              project3.style.height = "max-content"
            }
            if(this.showMenu4 && project4){
              project4.style.height = "max-content"
            }
            if(width <= 760){
              buttonArea1.style.top = "399px"
              buttonArea2.style.top = "370px"
              buttonArea3.style.top = "370px"
              buttonArea4.style.top = "380px"
              if(!this.showMenu1 && project1){
                project1.style.height = "740px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "720px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "720px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "720px"
              }
              if(this.showMenu1 && project1){
                project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
            if(width <= 660){
              buttonArea1.style.top = "421px"
              buttonArea2.style.top = "399px"
              buttonArea3.style.top = "399px"
              buttonArea4.style.top = "399px"
              if(!this.showMenu1 && project1){
                project1.style.height = "710px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "680px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "680px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "680px"
              }
              if(this.showMenu1 && project1){
                project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
            if(width <= 560){
              buttonArea1.style.top = "510px"
              buttonArea2.style.top = "440px"
              buttonArea3.style.top = "440px"
              buttonArea4.style.top = "443px"
              if(!this.showMenu1 && project1){
                project1.style.height = "690px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "645px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "645px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "645px"
              }
              if(this.showMenu1 && project1){
                project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
            if(width <= 460){
              buttonArea1.style.top = "630px"
              buttonArea2.style.top = "550px"
              buttonArea3.style.top = "555px"
              buttonArea4.style.top = "550px"
              if(!this.showMenu1 && project1){
                project1.style.height = "710px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "650px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "650px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "650px"
              }
              if(this.showMenu1 && project1){
                project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
          }
        }
        if(this.languageService.language == "de"){
          if(buttonArea1 && buttonArea2 && buttonArea3 && buttonArea4){
            buttonArea1.style.top = "445px"
            buttonArea2.style.top = "420px"
            buttonArea3.style.top = "400px"
            buttonArea4.style.top = "400px"
            if(!this.showMenu1 && project1){
              project1.style.height = "820px"
            }
            if(!this.showMenu2 && project2){
              project2.style.height = "820px"
            }
            if(!this.showMenu3 && project3){
              project3.style.height = "800px"
            }
            if(!this.showMenu4 && project4){
              project4.style.height = "790px"
            }
            if(this.showMenu1 && project1){
              project1.style.height = "max-content"
            }
            if(this.showMenu2 && project2){
              project2.style.height = "max-content"
            }
            if(this.showMenu3 && project3){
              project3.style.height = "max-content"
            }
            if(this.showMenu4 && project4){
              project4.style.height = "max-content"
            }
            if(width <= 760){
              buttonArea1.style.top = "467px"
              buttonArea2.style.top = "445px"
              buttonArea3.style.top = "420px"
              buttonArea4.style.top = "420px"
              if(!this.showMenu1 && project1){
                project1.style.height = "760px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "760px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "740px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "740px"
              }
              if(this.showMenu1 && project1){
              project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
            if(width <= 660){
              buttonArea1.style.top = "535px"
              buttonArea2.style.top = "485px"
              buttonArea3.style.top = "465px"
              buttonArea4.style.top = "470px"
              if(!this.showMenu1 && project1){
                project1.style.height = "745px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "720px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "700px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "710px"
              }
              if(this.showMenu1 && project1){
              project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
            if(width <= 560){
              buttonArea1.style.top = "630px"
              buttonArea2.style.top = "555px"
              buttonArea3.style.top = "515px"
              buttonArea4.style.top = "515px"
              if(!this.showMenu1 && project1){
                project1.style.height = "740px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "720px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "670px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "680px"
              }
              if(this.showMenu1 && project1){
              project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
            if(width <= 460){
              buttonArea1.style.top = "805px"
              buttonArea2.style.top = "695px"
              buttonArea3.style.top = "630px"
              buttonArea4.style.top = "625px"
              if(!this.showMenu1 && project1){
                project1.style.height = "775px"
              }
              if(!this.showMenu2 && project2){
                project2.style.height = "730px"
              }
              if(!this.showMenu3 && project3){
                project3.style.height = "670px"
              }
              if(!this.showMenu4 && project4){
                project4.style.height = "680px"
              }
              if(this.showMenu1 && project1){
              project1.style.height = "max-content"
              }
              if(this.showMenu2 && project2){
                project2.style.height = "max-content"
              }
              if(this.showMenu3 && project3){
                project3.style.height = "max-content"
              }
              if(this.showMenu4 && project4){
                project4.style.height = "max-content"
              }
            }
          }
        }
      }else{
        this.show1 = false
        this.show2 = false
        this.show3 = false
        this.show4 = false
        if(this.showMenu1 == true){
          this.showIT1()
        }
        if(this.showMenu2 == true){
          this.showIT2()
        }
        if(this.showMenu3 == true){
          this.showIT3()
        }
        if(this.showMenu4 == true){
          this.showIT4()
        }
        if(project1 && project2 && project3 && project4){
          if(this.languageService.language == "en"){
            project1.style.height = "600px"
            project2.style.height = "600px"
            project3.style.height = "600px"
            project4.style.height = "600px"
          }else{
            project1.style.height = "670px"
            project2.style.height = "670px"
            project3.style.height = "670px"
            project4.style.height = "670px"
          }
          
        }
        
      }   
    };
  
  show1Text=`show more`
  show1 = false
  showMenu1 = false
  
  showIT1(){
    setTimeout(()=>{
      const width = window.innerWidth;
      let projectArrow1:HTMLElement | null = document.getElementById("projectArrow1")
      let project1:HTMLElement | null = document.getElementById("Project1")
      let show1:HTMLElement | null = document.getElementById("show1")
      if(projectArrow1 && project1 && show1){
        if(this.showMenu1 == true){
          projectArrow1.style.transform = "rotate(0deg)"
          projectArrow1.style.top = "7px"
          
          show1.style.bottom = "10px"
          this.showMenu1 = false
          if(this.languageService.language == "en"){
            this.show1Text = `show more`
            if(width <= 860){
              project1.style.height = "800px"
            }
            if(width <= 760){
              project1.style.height = "740px"
            }
            if(width <= 660){
              project1.style.height = "710px"
            }
            if(width <= 560){
              project1.style.height = "695px"
            }
            if(width <= 460){
              project1.style.height = "710px"
            }
          }else{
            this.show1Text = `zeige mehr`
            if(width <= 860){
              project1.style.height = "820px"
            }
            if(width <= 760){
              project1.style.height = "760px"
            }
            if(width <= 660){
              project1.style.height = "745px"
            }
            if(width <= 560){
              project1.style.height = "740px"
            }
            if(width <= 460){
              project1.style.height = "775px"
            }
          }
          
        }else{
          projectArrow1.style.transform = "rotate(180deg)"
          projectArrow1.style.position = "relative"
          projectArrow1.style.bottom = "7px"
          project1.style.height = "max-content"
          show1.style.bottom = "10px"
          this.showMenu1 = true
          if(this.languageService.language == "en"){
            this.show1Text = `show less`
          }else{
            this.show1Text = `zeige weniger`
          }
          
        }
      }
    },100)
  }

  show2Text=`show more`
  show2 = false
  showMenu2 = false

  showIT2(){
    setTimeout(()=>{
      const width = window.innerWidth;
      let projectArrow2:HTMLElement | null =  document.getElementById("projectArrow2")
      let project2:HTMLElement | null = document.getElementById("Project2")
      let show2:HTMLElement | null = document.getElementById("show2")
      if(projectArrow2 && project2 && show2){
        if(this.showMenu2 == true){
          projectArrow2.style.transform = "rotate(0deg)"
          projectArrow2.style.top = "7px"
          show2.style.bottom = "10px"
          this.showMenu2 = false
          if(this.languageService.language == "en"){
            this.show2Text = `show more`
            if(width <= 860){
              project2.style.height = "780px"
            }
            if(width <= 760){
              project2.style.height = "720px"
            }
            if(width <= 660){
              project2.style.height = "680px"
            }
            if(width <= 560){
              project2.style.height = "645px"
            }
            if(width <= 460){
              project2.style.height = "650px"
            }
          }else{
            this.show2Text = `zeige mehr`
            if(width <= 860){
              project2.style.height = "820px"
            }
            if(width <= 760){
              project2.style.height = "760px"
            }
            if(width <= 660){
              project2.style.height = "720px"
            }
            if(width <= 560){
              project2.style.height = "720px"
            }
            if(width <= 460){
              project2.style.height = "745px"
            }
          }
        }else{
          projectArrow2.style.transform = "rotate(180deg)"
          projectArrow2.style.position = "relative"
          projectArrow2.style.top = "7px"
          project2.style.height = "max-content"
          show2.style.bottom = "10px"
          this.showMenu2 = true
          this.show2Text = `show less`
        }
      }
    },1)
  }

  show3Text=`show more`
  show3 = false
  showMenu3 = false

  showIT3(){
    setTimeout(()=>{
      const width = window.innerWidth;
      let projectArrow3:HTMLElement | null = document.getElementById("projectArrow3")
      let project3:HTMLElement | null = document.getElementById("Project3")
      let show3:HTMLElement | null = document.getElementById("show3")
      if(projectArrow3 && project3 && show3){
        if(this.showMenu3 == true){
          projectArrow3.style.top = "7px"
          projectArrow3.style.transform = "rotate(0deg)"
          project3.style.height = "580px"
          show3.style.bottom = "10px"
          this.showMenu3 = false
          if(this.languageService.language == "en"){
            this.show3Text = `show more`
            if(width <= 860){
              project3.style.height = "780px"
            }
            if(width <= 760){
              project3.style.height = "720px"
            }
            if(width <= 660){
              project3.style.height = "680px"
            }
            if(width <= 560){
              project3.style.height = "645px"
            }
            if(width <= 460){
              project3.style.height = "650px"
            }
          }else{
            this.show3Text = `zeige mehr`
            if(width <= 860){
              project3.style.height = "800px"
            }
            if(width <= 760){
              project3.style.height = "740px"
            }
            if(width <= 660){
              project3.style.height = "700px"
            }
            if(width <= 560){
              project3.style.height = "670px"
            }
            if(width <= 460){
              project3.style.height = "670px"
            }
          }  
        }else{
          projectArrow3.style.transform = "rotate(180deg)"
          projectArrow3.style.position = "relative"
          projectArrow3.style.top = "7px"
          project3.style.height = "max-content"
          show3.style.bottom = "10px"
          this.showMenu3 = true
          if(this.languageService.language == "en"){
            this.show3Text = `show less`
          }else{
            this.show3Text = `zeige weniger`
          }
          
        }
      }
    },1)
  }

  show4Text=`show more`
  show4 = false
  showMenu4 = false

  showIT4(){
    setTimeout(()=>{
      const width = window.innerWidth;
      let projectArrow4:HTMLElement | null = document.getElementById("projectArrow4")
      let project4:HTMLElement | null = document.getElementById("Project4")
      let show4:HTMLElement | null = document.getElementById("show4")
      if(projectArrow4 && project4 && show4){
        if(this.showMenu4 == true){
          projectArrow4.style.top = "7px"
          projectArrow4.style.transform = "rotate(0deg)"
          project4.style.height = "580px"
          show4.style.bottom = "10px"
          this.showMenu4 = false
          this.show4Text = `show more`
          if(this.languageService.language == "en"){
            this.show4Text = `show more`
            if(width <= 860){
              project4.style.height = "780px"
            }
            if(width <= 760){
              project4.style.height = "720px"
            }
            if(width <= 660){
              project4.style.height = "680px"
            }
            if(width <= 560){
              project4.style.height = "645px"
            }
            if(width <= 460){
              project4.style.height = "650px"
            }
          }else{
            this.show4Text = `zeige mehr`
            if(width <= 860){
              project4.style.height = "800px"
            }
            if(width <= 760){
              project4.style.height = "740px"
            }
            if(width <= 660){
              project4.style.height = "700px"
            }
            if(width <= 560){
              project4.style.height = "670px"
            }
            if(width <= 460){
              project4.style.height = "670px"
            }
          }
        }else{
          projectArrow4.style.transform = "rotate(180deg)"
          projectArrow4.style.position = "relative"
          projectArrow4.style.top = "7px"
          project4.style.height = "max-content"
          show4.style.bottom = "10px"
          this.showMenu4 = true
          if(this.languageService.language == "en"){
            this.show4Text = `show less`
          }else{
            this.show4Text = `zeige weniger`
          }
        }
      }
    },100)
  }

  private GitHubListener!: () => void;
  private LiveTestListener!: () => void;
  private SendButtonListener!: () => void;

  languageNav = "en"
  load2 = true
  load4 = true
  changeMenu() {
      if(this.languageService.language == "en"){
        let newMenu = `
          <div [innerHTML]="nav1">
            <a  class="section3" (click)="scrollToDiv('section3')">
              <span class="section3">Why me</span>
            </a>
          </div>
          <div [innerHTML]="nav1">
            <a  class="section4" (click)="scrollToDiv('section4')">
              <span class="section4">Skills</span>
            </a>
          </div>
          <div [innerHTML]="nav1">
            <a  class="section5" (click)="scrollToDiv('section5')">
              <span class="section5">My Work</span>
            </a>
          </div>
          <div [innerHTML]="nav1">
            <a  class="section6" (click)="scrollToDiv('section6')">
              <span class="section6 test">Contact</span>
            </a>
          </div>
        `;
        this.navMenuService.updateMenu(newMenu); // Update the menu through the service
    }
    if(this.languageService.language == "de"){
      let newMenu = `
      <div [innerHTML]="nav1">
        <a  class="section3" (click)="scrollToDiv('section3')">
          <span class="section3">Wieso ich ?</span>
        </a>
      </div>
      <div [innerHTML]="nav1">
        <a  class="section4" (click)="scrollToDiv('section4')">
          <span class="section4">Skills</span>
        </a>
      </div>
      <div [innerHTML]="nav1">
        <a  class="section5" (click)="scrollToDiv('section5')">
          <span class="section5">Meine Werke</span>
        </a>
      </div>
      <div [innerHTML]="nav1">
        <a  class="section6" (click)="scrollToDiv('section6')">
          <span class="section6">Kontakt</span>
        </a>
      </div>
      `;
    this.navMenuService.updateMenu(newMenu); // Update the menu through the service
    }
    
  }
  languageNav2 = "en"
  load3 = true
  changeMenuMobile() {
    this.languageNav2 = this.languageService.language
    if(this.languageLanding == "en"){
      const newMenu = 
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
      </div>
    `;
    this.navMenuService.updateMenuMobile(newMenu);
    }
  }

  public Mail() {
    window.open('mailto:davidburkert@outlook.com', '_blank');
  }

  public LinkedIn() {
    window.open("https://www.linkedin.com/in/david-burkert-73448b320/", '_blank');
  }

  public GitHub() {
    window.open("https://github.com/DaWeiBerlin", '_blank');
  }

  public handleGitHub1() {
    window.location.href="https://github.com/DaWeiBerlin/JOIN"
  }

  public handleGitHub2() {
    window.location.href="https://github.com/DaWeiBerlin/ElPolloLoco"
  }

  public handleGitHub3() {
    window.location.href="https://github.com/DaWeiBerlin/VanHoa"
  }

  public handleGitHub4() {
    window.location.href="https://github.com/DaWeiBerlin/VanHoa"
  }

  public handleLiveTest1() {
    window.location.href="https://davidsportfolio.de/Join/"
  }

  public handleLiveTest2() {
    window.location.href="https://davidsportfolio.de/ElPolloLoco/"
  }

  public handleLiveTest3() {
    window.location.href="https://davidsportfolio.de/VanHoa/"
  }

  public handleLiveTest4() {
    window.location.href="https://davidsportfolio.de/VanHoa/"
  }

  ngOnDestroy() {
    if (this.GitHubListener) this.GitHubListener();
    if (this.LiveTestListener) this.LiveTestListener();
    if (this.SendButtonListener) this.SendButtonListener();
  }

  handleMouseEvents(): void {
    const section6Email: HTMLElement | null = document.getElementById("section6Email");
    const section6Phone: HTMLElement | null = document.getElementById("section6Phone");
    const pic1: HTMLElement | null = document.getElementById("pic1");
    const pic2: HTMLElement | null = document.getElementById("pic2");
  
    if (section6Email && pic1) {  
      section6Email
      .addEventListener("mouseover", (): void => {
        pic1.setAttribute("src", "./../../../assets/img/desktopIMGs/🦆 icon _email_ (1).png");
      });
      section6Email.addEventListener("mouseleave", (): void => {
        pic1.setAttribute("src", "./../../../assets/img/desktopIMGs/🦆 icon _email_.png"); // Replace with your original image path
      });
    }
  
    if (section6Phone && pic2) {  
      section6Phone.addEventListener("mouseover", (): void => {
        pic2.setAttribute("src", "./../../../assets/img/desktopIMGs/🦆 icon _phone_ (1).png");
      });
      section6Phone.addEventListener("mouseleave", (): void => {
        pic2.setAttribute("src", "./../../../assets/img/desktopIMGs/🦆 icon _phone_.png"); // Replace with your original image path
      });
    }
  }

  load = true

  ngAfterViewInit(): void {
    let language: string | null = (localStorage.getItem("language"))
    if(language == null){
      this.switchLanguage(this.languageService.language)
    }else if(localStorage.getItem("language")){
      this.switchLanguage(language)
      this.languageService.language = language
    }
    this.changeMenu()
    this.changeMenu()
    this.changeMenuMobile()
    this.FillHTML(this.languageService.language)
    this.LandingpageService.languageSwitch$.subscribe((language) => {
      this.switchLanguage(language);
    });
  }

  
  landingPage1=""
  landingPage2=""
  landingPage3=""
  landingPage4=""
  landingPage5=""
  landingPage6=""
  landingPage7=""
  landingPage8=""
  landingPage9=""
  landingPage10=""
  landingPage11=""
  landingPage12=""
  landingPage13=""
  landingPage14=""
  landingPage15=""
  landingPage16=""
  landingPage17=""
  landingPage18=""
  landingPage19=""
  landingPage20=""
  landingPage21=""
  landingPage22=""
  landingPage23=""
  landingPage24=""
  landingPage25=""
  landingPage26=""
  landingPage27=""
  landingPage28=""
  landingPage29=""
  landingPage30=""
  landingPage31=""
  landingPage32=""
  landingPage33=""
  landingPage34=""
  landingPage35=""
  landingPage36=""
  landingPage37=""
  landingPage38=""
  landingPage39=""
  landingPage40=""
  landingPage41=""
  landingPage42=""
  landingPage43=""
  landingPage44=""
  landingPage45=""
  landingPage46=""
  landingPage47=""
  landingPage48=""
  landingPage49=""
  landingPage50=""
  landingPage51=""
  
  ngOnInit() {
    window.addEventListener('resize', this.handleResize);
    this.handleMouseEvents();
  }


  Project = "Project"

  FillHTML(language:string){
    let en = document.getElementById("EN")
    let de = document.getElementById("DE")
    let whyme = document.getElementById("WhyMe")
    let sectionTitle = document.getElementById("SectionTitle")
    let section6Title = document.getElementById("section6Title")
    this.languageService.language = language
    this.handleResize()
    if(language == "de" && de && en && whyme && sectionTitle && section6Title){
      this.Project = "ProjectDe"
      whyme.style.top = "140px"
      sectionTitle.style.top = "calc(20% + 135px)"
      sectionTitle.style.left = "91px"
      if(window.innerWidth <= 860){
        section6Title.style.setProperty('top', '-180px', 'important');
        section6Title.style.setProperty('left', '20px', 'important'); 
      }else if(window.innerWidth <= 1050){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '30px', 'important');
      }else if(window.innerWidth <= 1100){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '70px', 'important');
      }else if(window.innerWidth <= 1350 && window.innerWidth > 1100){
        section6Title.style.setProperty('top', '272px', 'important');
        section6Title.style.setProperty('left', '-140px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight <= 1080){
        section6Title.style.setProperty('top', 'calc(17.33% + 100px)', 'important');
        section6Title.style.setProperty('left', '100px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight > 1080){
        console.log("Fill")
        section6Title.style.setProperty('top', 'calc(17.33% + 188px)', 'important');
        section6Title.style.setProperty('left', '100px', 'important');
      }
      section6Title.style.whiteSpace = "nowrap"
      de.style.color = "#b5e93b"
      en.style.color = "white"
      this.landingPage1="David Burkert"
      this.landingPage2="Frontend Developer"
      this.landingPage3="Wieso ich ?"
      this.landingPage4="Ich bin motiviert fortlaufend neue Technologien zu erlernen und mich selbst zu entwickeln. Meine Fähigkeit komplexe Probleme zu lösen und meine Passion für das programmieren machen mich zu einem wertvollen Teammitglied."
      this.landingPage5="Ich bin"
      this.landingPage6="Kontaktier mich"
      this.landingPage7="Mein Skillset"
      this.landingPage8="Die IT-Welt entwickelt sich fortlaufend weiter und es gibt neue Technologien und Methoden. Motiviert zu bleiben, um meine IT-Fähigkeiten zu erweitern, erfordert eine strategische herangehensweise, ein neuegieren Charakter und eine hingabe zu lebenslangem lernen."
      this.landingPage9="Sass"
      this.landingPage10="Python"
      this.landingPage11="Bootstrap"
      this.landingPage12="Windows"
      this.landingPage13="Linux"
      this.landingPage14="Ich bin immer froh neue Technologien zu erlernen, sag mir einfach was du gerade brauchst."
      this.landingPage15="Meine Arbeit"
      this.landingPage16="Projekt Join"
      this.landingPage17="Über das Projekt"
      this.landingPage18="Team und Aufgabenplaner, welcher an das Kanbanboard angelehnt ist. Erstelle und Organiziere Aufgaben, nutze das Drag and Drop System um den Fortschritt des Projekts sichtbar zu machen. Weise Nutzer zu und füge Kategorien hinzu. Es gibt einen vollkommen funktionsfähigen Login-Bereich und eine Datenbank um den Fortschritt zu speichern."
      this.landingPage19="Technologien die ich genutzt habe"
      this.landingPage20="HTML, JavaScript, CSS, Firebase, IP-Geolocation"
      this.landingPage21="Was habe ich gelernt"
      this.landingPage22="Ich habe die Speicherung und Editierung von Daten in einer Firebase-Datenbank erlernt. Ich habe erlernt die Daten von einer API zu fetchen und so die Daten in der Firestore-Datenbank abzurufen, hochzuladen , zu löschen und zu editieren. Zusätzlich habe ich die IP des USERs aus eine rAPI abgerufen und für den automatischen Login und die Strafverfolgung abgespeichert."
      this.landingPage23="Projekt Pollo Loco"
      this.landingPage24="Über das Projekt"
      this.landingPage25="Bei dem Spiel hhandelt es sich um ein Jump an Run Game, welches an SuperMario erinnert und welches Objektorientiert ist. In dem Spiel musst du dem Character dabei helfen Münzen und Tabaskoflaschen einzusammeln, während du über Hühnchen springst. Am Ende des Spiels muss dann noch der Endboss besiegt werden."
      this.landingPage26="Technologien die ich benutzt habe"
      this.landingPage27="HTML, JavaScript Klassen, CSS"
      this.landingPage28="Was habe ich gelernt"
      this.landingPage29="Ich habe Klassen kodiert und sie korrekt verkettet. Ich habe eine Menge in dem Projekt erlernt, zum Beispiel habe ich die Animation von Bildsequenzen, mithilfe von Intervallen und Folgen, in einem Canvas erlernt. In dem Projekt musste ich verscheidenste Keyboard events definieren und eine Menge mehr."
      this.landingPage30="Projekt Bestell-App"
      this.landingPage31="Über das Projekt"
      this.landingPage32="In dieser App kannst du Gerichte auswählen und zur Bestellung hinzufügen. Die Bestellung kann edietiert werden und es gibt eine extra Seite für das Menü, das Impressum und die Kontakte. Alles wurde liebevoll mit MP4s und PNGs ausgeschmückt."
      this.landingPage33="Technologien die ich benutzt habe"
      this.landingPage34="HTML, JavaScript, CSS"
      this.landingPage35="Was habe ich gelernt ?"
      this.landingPage36="Ich habe Klassen kodiert und sie korrekt verkettet. Ich habe eine Menge in dem Projekt erlernt, zum Beispiel habe ich die Animation von Bildsequenzen, mithilfe von Intervallen und Folgen, in einem Canvas erlernt. In dem Projekt musste ich verscheidenste Keyboard events definieren und eine Menge mehr."
      this.landingPage37="Projekt Polaroid Messenger"
      this.landingPage38="Über das Projekt"
      this.landingPage39="In dieser App kannst du Gerichte auswählen und zur Bestellung hinzufügen. Die Bestellung kann edietiert werden und es gibt eine extra Seite für das Menü, das Impressum und die Kontakte. Alles wurde liebevoll mit MP4s und PNGs ausgeschmückt."
      this.landingPage40="Technologien die ich benutzt habe"
      this.landingPage41="HTML, JavaScript, CSS"
      this.landingPage42="Was habe ich gelernt"
      this.landingPage43="Ich habe Klassen kodiert und sie korrekt verkettet. Ich habe eine Menge in dem Projekt erlernt, zum Beispiel habe ich die Animation von Bildsequenzen, mithilfe von Intervallen und Folgen, in einem Canvas erlernt. In dem Projekt musste ich verscheidenste Keyboard events definieren und eine Menge mehr."
      this.landingPage44="Neustes Projekt"
      this.landingPage45="Ich arbeite gerade an einer Streaming-App. Das ist für mich sowohl aufregend, wie auch herausfordernd. In meiner Arbeit liegt der Schlüssel zum Erfolg in einer guten Planung und Ausführung. Mit der Streaming App könnten nationale Konflikte gelöst werden und es köntne Frieden mithilfe von sozialer Interaktion und durch eine Moderation erreicht werden."
      this.landingPage46="Lass uns reden."
      this.landingPage47="Kontaktier mich"
      this.landingPage48="Lass uns zusammenarbeiten."
      this.landingPage49="Wenn dein Projekt die Entwicklung einer neuen Applikation, die Einbindung einer Datenbank oder die Kalkulation großer Datenmengen beinhaltet, habe ich das technische Verständnis und die Problemlösungsfähigkeiten, damit das Projekt einen erfolgreichen Ausgang hat."
      this.landingPage50="Impressum"
      this.landingPage51="Datenschutzerkärung"
      this.show1Text = "zeige mehr"
      this.show2Text = "zeige mehr"
      this.show3Text = "zeige mehr"
      this.show4Text = "zeige mehr"
    }
    if(language == "en" && de && en && whyme && sectionTitle && section6Title){
      this.Project = "Project"
      whyme.style.top = "63px"
      sectionTitle.style.top = "calc(20% + 90px)"
      sectionTitle.style.left = "140px"
      if(window.innerWidth <= 860){
        section6Title.style.setProperty('top', '-180px', 'important');
        section6Title.style.setProperty('left', '20px', 'important'); 
      }else if(window.innerWidth <= 1050){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '30px', 'important');
      }else if(window.innerWidth <= 1100){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '70px', 'important');
      }else if(window.innerWidth <= 1350 && window.innerWidth > 1100){
        section6Title.style.setProperty('top', '225px', 'important');
        section6Title.style.setProperty('left', '-95px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight <= 1080){
        section6Title.style.setProperty('top', 'calc(17.33% + 55px)', 'important');
        section6Title.style.setProperty('left', '155px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight > 1080){
        section6Title.style.setProperty('top', 'calc(17.33% + 135px)', 'important');
        section6Title.style.setProperty('left', '155px', 'important');
      }
      de.style.color = "white"
      en.style.color = "#b5e93b"
      this.landingPage1="David Burkert"
      this.landingPage2="Frontend Developer"
      this.landingPage3="Why me"
      this.landingPage4="I am motivated to continously learn new technologies and develop myself. My ability to solve complex problems and my passion for programming make me a valuable member of your team."
      this.landingPage5="I am"
      this.landingPage6="Contact Me"
      this.landingPage7="My Skill Set"
      this.landingPage8="The IT landscape is continously evolving, with new technologies and methodologies. Staying motivated to expand my IT skills requires a strategic approach, a curios mindset, and a commitment to lifelong learning."
      this.landingPage9="Sass"
      this.landingPage10="Python"
      this.landingPage11="Bootstrap"
      this.landingPage12="Windows"
      this.landingPage13="Linux"
      this.landingPage14="I&apos;m allways happy to learn new technologies, just tell me what you need."
      this.landingPage15="My Work"
      this.landingPage16="Project Join"
      this.landingPage17="About the project"
      this.landingPage18="Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and and categories. The Teamplaner includes a fully functional Login Area, a Contact Book, a Summary and a Database to store the progress of the tasks."
      this.landingPage19="Technologies I have used"
      this.landingPage20="HTML, JavaScript, CSS, Firebase, IP-Geolocation"
      this.landingPage21="What I have learned"
      this.landingPage22="I&apos;ve learned to store and edit data in a Database. I&apos;learned to get and delete data from a Database. I&apos;ve also learned to fetch the data drom an API and to use the different options. In extra I&apos;ve stored the IP for the automatic Login."
      this.landingPage23="Project Pollo Loco"
      this.landingPage24="About the project"
      this.landingPage25="Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa, while you have to jump over chickens and at the end you have to fight against the crazy hen."
      this.landingPage26="Technologies I have used"
      this.landingPage27="HTML, JavaScript Classes, CSS"
      this.landingPage28="What I have learned"
      this.landingPage29="I&apos;ve coded classes and chained them correctly. I&apos;learned a lot in this project, for example to animate PNG sequences with Intervals in a canvas element, to implement game sounds and various Keyboard events and a lot more."
      this.landingPage30="Project Delivery-App"
      this.landingPage31="About the project"
      this.landingPage32="In this App you can select and add dishes to the orderlist. It&apos;s possible to edit the order list. There is an extra page for the menu, the imprint and contacts. Everything is lovely designed with mp4s and pngs."
      this.landingPage33="Technologies I have used"
      this.landingPage34="HTML, JavaScript, CSS"
      this.landingPage35="What I have learned"
      this.landingPage36="I&apos;ve coded classes and chained them correctly. I&apos;learned a lot in this project, for example to animate PNG sequences with Intervals in a canvas element, to implement game sounds and various Keyboard events and a lot more."
      this.landingPage37="Project Polaroid Messenger"
      this.landingPage38="About the project"
      this.landingPage39="In this App you can select and add dishes to the orderlist. It&apos;s possible to edit the order list. There is an extra page for the menu, the imprint and contacts. Everything is lovely designed with mp4s and pngs."
      this.landingPage40="Technologies I have used"
      this.landingPage41="HTML, JavaScript, CSS"
      this.landingPage42="What I have learned"
      this.landingPage43="I&apos;ve coded classes and chained them correctly. I&apos;learned a lot in this project, for example to animate PNG sequences with Intervals in a canvas element, to implement game sounds and various Keyboard events and a lot more."
      this.landingPage44="Ongoing project"
      this.landingPage45="I am currently working on developing a streaming app. This is for me both exciting and challenging. In my work the key to success lies in a good planning and execution. With the streaming App national conficts could be solved and it could be possible to achieve peace with social interaction and moderation."
      this.landingPage46="Let&apos;s talk"
      this.landingPage47="Contact me"
      this.landingPage48="Let us work together."
      this.landingPage49="Whether your project involves developing a new application, implementing a new Database or calculate big Data sets, I have the technical acumen and problem-solving skills to ensure successful outcoumes."
      this.landingPage50="Legal notice"
      this.landingPage51="privacy policy"
      this.show1Text = "show more"
      this.show2Text = "show more"
      this.show3Text = "show more"
      this.show4Text = "show more"
    }
  }


  switchLanguage(language:string){
    if(language=="de"){
      this.languageService.language = "de"
    }
    if(language=="en"){
      this.languageService.language = "en"
    }
    localStorage.setItem("language",language)
    this.changeMenu()
    this.HeaderService.switchLanguage(language)
    
    let en = document.getElementById("EN")
    let de = document.getElementById("DE")
    let whyme = document.getElementById("WhyMe")
    let sectionTitle = document.getElementById("SectionTitle")
    let section6Title = document.getElementById("section6Title")
   
    this.languageService.language = language
    if(language == "de" && de && en && whyme && sectionTitle && section6Title){
      this.Project = "ProjectDe"
      whyme.style.top = "140px"
      sectionTitle.style.top = "calc(20% + 135px)"
      sectionTitle.style.left = "91px"
      if(window.innerWidth <= 860){
        section6Title.style.setProperty('top', '-180px', 'important');
        section6Title.style.setProperty('left', '20px', 'important'); 
      }else if(window.innerWidth <= 1050){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '30px', 'important');
      }else if(window.innerWidth <= 1100){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '70px', 'important');
      }else if(window.innerWidth <= 1350 && window.innerWidth > 1100){
        section6Title.style.setProperty('top', '272px', 'important');
        section6Title.style.setProperty('left', '-140px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight <= 1080){
        section6Title.style.setProperty('top', 'calc(17.33% + 100px)', 'important');
        section6Title.style.setProperty('left', '100px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight > 1080){
        console.log("Switch")
        section6Title.style.setProperty('top', 'calc(17.33% + 188px)', 'important');
        section6Title.style.setProperty('left', '100px', 'important');
      }
      section6Title.style.whiteSpace = "nowrap"
      de.style.color = "#b5e93b"
      en.style.color = "white"
      this.landingPage1="David Burkert"
      this.landingPage2="Frontend Developer"
      this.landingPage3="Wieso ich ?"
      this.landingPage4="Ich bin motiviert fortlaufend neue Technologien zu erlernen und mich selbst zu entwickeln. Meine Fähigkeit komplexe Probleme zu lösen und meine Passion für das programmieren machen mich zu einem wertvollen Teammitglied."
      this.landingPage5="Ich bin"
      this.landingPage6="Kontaktier mich"
      this.landingPage7="Mein Skillset"
      this.landingPage8="Die IT-Welt entwickelt sich fortlaufend weiter und es gibt neue Technologien und Methoden. Motiviert zu bleiben, um meine IT-Fähigkeiten zu erweitern, erfordert eine strategische herangehensweise, ein neuegieren Charakter und eine hingabe zu lebenslangem lernen."
      this.landingPage9="Sass"
      this.landingPage10="Python"
      this.landingPage11="Bootstrap"
      this.landingPage12="Windows"
      this.landingPage13="Linux"
      this.landingPage14="Ich bin immer froh neue Technologien zu erlernen, sag mir einfach was du gerade brauchst."
      this.landingPage15="Meine Arbeit"
      this.landingPage16="Projekt Join"
      this.landingPage17="Über das Projekt"
      this.landingPage18="Team und Aufgabenplaner, welcher an das Kanbanboard angelehnt ist. Erstelle und Organiziere Aufgaben, nutze das Drag and Drop System um den Fortschritt des Projekts sichtbar zu machen. Weise Nutzer zu und füge Kategorien hinzu. Es gibt einen vollkommen funktionsfähigen Login-Bereich und eine Datenbank um den Fortschritt zu speichern."
      this.landingPage19="Technologien die ich genutzt habe"
      this.landingPage20="HTML, JavaScript, CSS, Firebase, IP-Geolocation"
      this.landingPage21="Was habe ich gelernt"
      this.landingPage22="Ich habe die Speicherung und Editierung von Daten in einer Firebase-Datenbank erlernt. Ich habe erlernt die Daten von einer API zu fetchen und so die Daten in der Firestore-Datenbank abzurufen, hochzuladen , zu löschen und zu editieren. Zusätzlich habe ich die IP des USERs aus eine rAPI abgerufen und für den automatischen Login und die Strafverfolgung abgespeichert."
      this.landingPage23="Projekt Pollo Loco"
      this.landingPage24="Über das Projekt"
      this.landingPage25="Bei dem Spiel hhandelt es sich um ein Jump an Run Game, welches an SuperMario erinnert und welches Objektorientiert ist. In dem Spiel musst du dem Character dabei helfen Münzen und Tabaskoflaschen einzusammeln, während du über Hühnchen springst. Am Ende des Spiels muss dann noch der Endboss besiegt werden."
      this.landingPage26="Technologien die ich benutzt habe"
      this.landingPage27="HTML, JavaScript Klassen, CSS"
      this.landingPage28="Was habe ich gelernt"
      this.landingPage29="Ich habe Klassen kodiert und sie korrekt verkettet. Ich habe eine Menge in dem Projekt erlernt, zum Beispiel habe ich die Animation von Bildsequenzen, mithilfe von Intervallen und Folgen, in einem Canvas erlernt. In dem Projekt musste ich verscheidenste Keyboard events definieren und eine Menge mehr."
      this.landingPage30="Projekt Bestell-App"
      this.landingPage31="Über das Projekt"
      this.landingPage32="In dieser App kannst du Gerichte auswählen und zur Bestellung hinzufügen. Die Bestellung kann edietiert werden und es gibt eine extra Seite für das Menü, das Impressum und die Kontakte. Alles wurde liebevoll mit MP4s und PNGs ausgeschmückt."
      this.landingPage33="Technologien die ich benutzt habe"
      this.landingPage34="HTML, JavaScript, CSS"
      this.landingPage35="Was habe ich gelernt ?"
      this.landingPage36="Ich habe Klassen kodiert und sie korrekt verkettet. Ich habe eine Menge in dem Projekt erlernt, zum Beispiel habe ich die Animation von Bildsequenzen, mithilfe von Intervallen und Folgen, in einem Canvas erlernt. In dem Projekt musste ich verscheidenste Keyboard events definieren und eine Menge mehr."
      this.landingPage37="Projekt Polaroid Messenger"
      this.landingPage38="Über das Projekt"
      this.landingPage39="In dieser App kannst du Gerichte auswählen und zur Bestellung hinzufügen. Die Bestellung kann edietiert werden und es gibt eine extra Seite für das Menü, das Impressum und die Kontakte. Alles wurde liebevoll mit MP4s und PNGs ausgeschmückt."
      this.landingPage40="Technologien die ich benutzt habe"
      this.landingPage41="HTML, JavaScript, CSS"
      this.landingPage42="Was habe ich gelernt"
      this.landingPage43="Ich habe Klassen kodiert und sie korrekt verkettet. Ich habe eine Menge in dem Projekt erlernt, zum Beispiel habe ich die Animation von Bildsequenzen, mithilfe von Intervallen und Folgen, in einem Canvas erlernt. In dem Projekt musste ich verscheidenste Keyboard events definieren und eine Menge mehr."
      this.landingPage44="Neustes Projekt"
      this.landingPage45="Ich arbeite gerade an einer Streaming-App. Das ist für mich sowohl aufregend, wie auch herausfordernd. In meiner Arbeit liegt der Schlüssel zum Erfolg in einer guten Planung und Ausführung. Mit der Streaming App könnten nationale Konflikte gelöst werden und es köntne Frieden mithilfe von sozialer Interaktion und durch eine Moderation erreicht werden."
      this.landingPage46="Lass uns reden."
      this.landingPage47="Kontaktier mich"
      this.landingPage48="Lass uns zusammenarbeiten."
      this.landingPage49="Wenn dein Projekt die Entwicklung einer neuen Applikation, die Einbindung einer Datenbank oder die Kalkulation großer Datenmengen beinhaltet, habe ich das technische Verständnis und die Problemlösungsfähigkeiten, damit das Projekt einen erfolgreichen Ausgang hat."
      this.landingPage50="Impressum"
      this.landingPage51="Datenschutzerkärung"
      this.show1Text = "zeige mehr"
      this.show2Text = "zeige mehr"
      this.show3Text = "zeige mehr"
      this.show4Text = "zeige mehr"
    }
    if(language == "en" && de && en && whyme && sectionTitle && section6Title){
      this.Project = "Project"
      whyme.style.top = "63px"
      sectionTitle.style.top = "calc(20% + 90px)"
      sectionTitle.style.left = "140px !important"
      if(window.innerWidth <= 860){
        section6Title.style.setProperty('top', '-180px', 'important');
        section6Title.style.setProperty('left', '20px', 'important'); 
      }else if(window.innerWidth <= 1050){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '30px', 'important');
      }else if(window.innerWidth <= 1100){
        section6Title.style.setProperty('top', '35px', 'important');
        section6Title.style.setProperty('left', '70px', 'important');
      }else if(window.innerWidth <= 1350 && window.innerWidth > 1100){
        section6Title.style.setProperty('top', '225px', 'important');
        section6Title.style.setProperty('left', '-95px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight <= 1080){
        section6Title.style.setProperty('top', 'calc(17.33% + 55px)', 'important');
        section6Title.style.setProperty('left', '155px', 'important');
      }else if(window.innerWidth > 1350 && window.innerHeight > 1080){
        section6Title.style.setProperty('top', 'calc(17.33% + 135px)', 'important');
        section6Title.style.setProperty('left', '155px', 'important');
      }
      de.style.color = "white"
      en.style.color = "#b5e93b"
      this.landingPage1="David Burkert"
      this.landingPage2="Frontend Developer"
      this.landingPage3="Why me"
      this.landingPage4="I am motivated to continously learn new technologies and develop myself. My ability to solve complex problems and my passion for programming make me a valuable member of your team."
      this.landingPage5="I am"
      this.landingPage6="Contact Me"
      this.landingPage7="My Skill Set"
      this.landingPage8="The IT landscape is continously evolving, with new technologies and methodologies. Staying motivated to expand my IT skills requires a strategic approach, a curios mindset, and a commitment to lifelong learning."
      this.landingPage9="Sass"
      this.landingPage10="Python"
      this.landingPage11="Bootstrap"
      this.landingPage12="Windows"
      this.landingPage13="Linux"
      this.landingPage14="I&apos;m allways happy to learn new technologies, just tell me what you need."
      this.landingPage15="My Work"
      this.landingPage16="Project Join"
      this.landingPage17="About the project"
      this.landingPage18="Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and and categories. The Teamplaner includes a fully functional Login Area, a Contact Book, a Summary and a Database to store the progress of the tasks."
      this.landingPage19="Technologies I have used"
      this.landingPage20="HTML, JavaScript, CSS, Firebase, IP-Geolocation"
      this.landingPage21="What I have learned"
      this.landingPage22="I&apos;ve learned to store and edit data in a Database. I&apos;learned to get and delete data from a Database. I&apos;ve also learned to fetch the data drom an API and to use the different options. In extra I&apos;ve stored the IP for the automatic Login."
      this.landingPage23="Project Pollo Loco"
      this.landingPage24="About the project"
      this.landingPage25="Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa, while you have to jump over chickens and at the end you have to fight against the crazy hen."
      this.landingPage26="Technologies I have used"
      this.landingPage27="HTML, JavaScript Classes, CSS"
      this.landingPage28="What I have learned"
      this.landingPage29="I&apos;ve coded classes and chained them correctly. I&apos;learned a lot in this project, for example to animate PNG sequences with Intervals in a canvas element, to implement game sounds and various Keyboard events and a lot more."
      this.landingPage30="Project Delivery-App"
      this.landingPage31="About the project"
      this.landingPage32="In this App you can select and add dishes to the orderlist. It&apos;s possible to edit the order list. There is an extra page for the menu, the imprint and contacts. Everything is lovely designed with mp4s and pngs."
      this.landingPage33="Technologies I have used"
      this.landingPage34="HTML, JavaScript, CSS"
      this.landingPage35="What I have learned"
      this.landingPage36="I&apos;ve coded classes and chained them correctly. I&apos;learned a lot in this project, for example to animate PNG sequences with Intervals in a canvas element, to implement game sounds and various Keyboard events and a lot more."
      this.landingPage37="Project Polaroid Messenger"
      this.landingPage38="About the project"
      this.landingPage39="In this App you can select and add dishes to the orderlist. It&apos;s possible to edit the order list. There is an extra page for the menu, the imprint and contacts. Everything is lovely designed with mp4s and pngs."
      this.landingPage40="Technologies I have used"
      this.landingPage41="HTML, JavaScript, CSS"
      this.landingPage42="What I have learned"
      this.landingPage43="I&apos;ve coded classes and chained them correctly. I&apos;learned a lot in this project, for example to animate PNG sequences with Intervals in a canvas element, to implement game sounds and various Keyboard events and a lot more."
      this.landingPage44="Ongoing project"
      this.landingPage45="I am currently working on developing a streaming app. This is for me both exciting and challenging. In my work the key to success lies in a good planning and execution. With the streaming App national conficts could be solved and it could be possible to achieve peace with social interaction and moderation."
      this.landingPage46="Let&apos;s talk"
      this.landingPage47="Contact me"
      this.landingPage48="Let us work together."
      this.landingPage49="Whether your project involves developing a new application, implementing a new Database or calculate big Data sets, I have the technical acumen and problem-solving skills to ensure successful outcoumes."
      this.landingPage50="Legal notice"
      this.landingPage51="privacy policy"
      this.show1Text = "show more"
      this.show2Text = "show more"
      this.show3Text = "show more"
      this.show4Text = "show more"
    }
    this.handleResize()
  }
  
}