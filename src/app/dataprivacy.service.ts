import { Injectable } from '@angular/core';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataprivacyService {

  private languageSwitchSubject = new Subject<string>();

  // Observable to be subscribed to by components
  languageSwitch$ = this.languageSwitchSubject.asObservable();

  constructor() {}

  // Method to switch language and notify subscribers
  switchLanguage(language: string) {
    this.languageSwitchSubject.next(language);
  }
}
