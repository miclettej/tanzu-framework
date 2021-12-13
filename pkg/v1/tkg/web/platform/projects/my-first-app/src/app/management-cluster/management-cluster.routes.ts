import { Routes } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';

export const WIZARD_ROUTES: Routes = [
  {
    path: 'vsphere-wizard',
    component: WizardComponent
  }
];
