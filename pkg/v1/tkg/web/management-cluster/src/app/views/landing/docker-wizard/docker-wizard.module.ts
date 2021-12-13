import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerWizardComponent } from './docker-wizard.component';
import { DockerWizardRoutingModule } from './docker-wizard-routing.module';
import { LandingModule } from '../landing.module';
import { SharedModule } from 'management-cluster/src/app/shared/shared.module';
import { WizardSharedModule } from '../wizard/shared/wizard-shared.module';
import { DaemonValidationStepComponent } from './daemon-validation-step/daemon-validation-step.component';
import { NodeSettingStepComponent } from './node-setting-step/node-setting-step.component';

@NgModule({
    declarations: [DockerWizardComponent, DaemonValidationStepComponent, NodeSettingStepComponent],
    imports: [
        CommonModule,
        DockerWizardRoutingModule,
        SharedModule,
        WizardSharedModule,
        LandingModule
    ]
})
export class DockerWizardModule { }
