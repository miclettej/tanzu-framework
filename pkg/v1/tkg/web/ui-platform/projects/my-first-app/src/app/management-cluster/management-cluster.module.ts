import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WIZARD_ROUTES } from './management-cluster.routes'
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    WizardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WIZARD_ROUTES)
  ]
})
export class ManagementClusterModule { }
