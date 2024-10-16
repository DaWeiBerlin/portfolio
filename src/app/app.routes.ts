import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent}, // Default route redirects to home
    { path: 'imprint', component: ImprintComponent },
    { path: 'dataprivacy', component: DataprivacyComponent }
];
