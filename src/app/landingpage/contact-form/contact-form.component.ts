import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { EmailValidator, FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../language.service';
import { LandingpageComponent } from '../landingpage.component';

interface Data{
  company: string
  name: string 
  email: string
  message: string
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.sass',
})
export class ContactFormComponent {
  language=""
  constructor(private languageService: LanguageService, private LandingPageComponent:LandingpageComponent){
    this.language = languageService.language
  }

  buttonStyles = {
    backgroundColor: '#9E9D9D',
    cursor:"not-allowed",
    boxShadow:"none"
  };

  http = inject(HttpClient)
  mailTest = true;
  

  post = {
    endPoint: 'https://davidsportfolio.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  agree = false

  contactData:Data = {
    company:"",
    name:"",
    email:"",
    message:""
  }

  isDisabled = true;

  onSubmit(ngForm: NgForm) {
    if (!this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.contactData = { company: '', name: '', email: '', message: '' };
          },
          error: (error) => {
            console.error(error);
            alert('There was an error sending your message. Please send the Message instead as an E-Mail. The button is above.');
          },
          complete: () => console.info('send post complete'),
        });
        
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  
  agreePrivacyPolicy(): void {
    const box: HTMLElement | null = document.getElementById("box");
  
    if (box) {
      if (this.agree === false) {
        // User is agreeing (toggle to true)
        this.agree = true;
        box.setAttribute("src", "./../../../assets/img/desktopIMGs/BoxFilled.png");
      } else {
        // User is disagreeing (toggle to false)
        this.agree = false;
        box.setAttribute("src", "./../../../assets/img/desktopIMGs/BoxGrau.png");
      }
    }
  }

  
  button?: HTMLElement | null;

  // Class methods for the event listeners
  mouseOverHandler = (): void => {
    this.button!.style.background = "linear-gradient(160.33deg, #B5E93B 50.78%, #547800 133.54%)";
  };

  mouseLeaveHandler = (): void => {
    this.button!.style.background = "#b5e93b";
  };

  // Method to check validation and add/remove listeners
  checkValidation(field:any): void {
    this.button = document.getElementById("contactFormButton");

    if (this.button) {
      const companyField = document.getElementById("company") as HTMLInputElement | null;
      const nameField = document.getElementById("name") as HTMLInputElement | null;
      const emailField = document.getElementById("email") as HTMLInputElement | null;
      const messageField = document.getElementById("subject") as HTMLInputElement | null;
      if(field == "company"){
        if (companyField) {
          if(this.contactData.company.length > 30){
            companyField.style.border = "1px solid #fd2e12";
            companyField.style.boxShadow = "0 0 5px #fd2e12";

          }else{
            companyField.style.border = "1px solid #b5e93b";
            companyField.style.boxShadow = "0 0 5px #b5e93b";
          }
        } 
      }
      if(field == "name"){
        if (nameField) {
          if(this.contactData.name.length <= 3 || this.contactData.name.length > 40){
            nameField.style.border = "1px solid #fd2e12";
            nameField.style.boxShadow = "0 0 5px #fd2e12";
          }else{
            console.log("?")
            nameField.style.border = "1px solid #b5e93b";
            nameField.style.boxShadow = "0 0 5px #b5e93b";
          }
        } 
      }
      if(field == "email"){
        console.log("TestEmail")
        if (emailField) {
          
          if(this.contactData.email.length <= 10 || this.contactData.email.length > 40){
          // Check if companyField exists
            emailField.style.border = "1px solid #fd2e12";
            emailField.style.boxShadow = "0 0 5px #fd2e12";
          }else{
            emailField.style.border = "1px solid #b5e93b";
            emailField.style.boxShadow = "0 0 5px #b5e93b";
          } 
        }
      }
      if(field == "message"){
        if (messageField) {
          if(this.contactData.message.length <= 5 || this.contactData.message.length > 400){
            messageField.style.border = "1px solid #fd2e12";
            messageField.style.boxShadow = "0 0 5px #fd2e12";
          }else{
            messageField.style.border = "1px solid #b5e93b";
            messageField.style.boxShadow = "0 0 5px #b5e93b";
          }
        }
      }
      
      if (
        this.contactData.company !== "" && this.contactData.company.length >= 0 &&
        this.contactData.name !== "" && this.contactData.name.length >= 4 &&
        this.contactData.email !== "" && this.contactData.email.length >= 8 &&
        this.contactData.message !== "" && this.contactData.message.length >= 5 &&
        this.agree === true
      ) {
        this.buttonStyles.backgroundColor = '#b5e93b';
        this.buttonStyles.cursor = "pointer";
        this.buttonStyles.boxShadow = "0 0 5px #b5e93b";

        this.isDisabled = false;
        this.mailTest = false

        // Add event listeners
        this.button.addEventListener("mouseover", this.mouseOverHandler);
        this.button.addEventListener("mouseleave", this.mouseLeaveHandler);

      } else {
        this.buttonStyles.backgroundColor = '#9E9D9D';
        this.buttonStyles.cursor = "not-allowed";
        this.buttonStyles.boxShadow = "0 0 5px black";

        this.isDisabled = true;

        // Remove event listeners
        this.button.removeEventListener("mouseover", this.mouseOverHandler);
        this.button.removeEventListener("mouseleave", this.mouseLeaveHandler);
      }
    } else {
      console.warn("Button not found");
    }
  }

  ngOnDestroy() {
    if (this.button) {
      this.button.removeEventListener("mouseover", this.mouseOverHandler);
      this.button.removeEventListener("mouseleave", this.mouseLeaveHandler);
    }
  }
  
}
  

