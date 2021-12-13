import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SharedOsImageStepComponent } from './os-image-step.component';

import { SharedModule } from 'management-cluster/src/app/shared/shared.module';
import { ValidationService } from '../../../validation/validation.service';
import { APIClient } from 'management-cluster/src/app/swagger/api-client.service';
import { VSphereWizardFormService } from 'management-cluster/src/app/shared/service/vsphere-wizard-form.service';
import Broker from 'management-cluster/src/app/shared/service/broker';
import { Messenger } from 'management-cluster/src/app/shared/service/Messenger';

describe('OsImageStepComponent', () => {
    let component: SharedOsImageStepComponent;
    let fixture: ComponentFixture<SharedOsImageStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedOsImageStepComponent],
            imports: [
                ReactiveFormsModule,
                SharedModule
            ],
            providers: [
                ValidationService,
                VSphereWizardFormService,
                FormBuilder,
                APIClient,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        Broker.messenger = new Messenger();
        const fb = new FormBuilder();
        fixture = TestBed.createComponent(SharedOsImageStepComponent);
        component = fixture.componentInstance;
        component.wizardFormService = TestBed.inject(VSphereWizardFormService);
        component.type = 'VSPHERE';
        component.formGroup = fb.group({
        });

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should reset for upon dc change', () => {
        component.resetFieldsUponDCChange();
        expect(component.formGroup.get('osImage').value).toBeFalsy();
    });

    it('should retrive os image when function invoked', () => {
        const resetDcSpy = spyOn(component, 'resetFieldsUponDCChange').and.callThrough();
        const msgSpy = spyOn(Broker.messenger, 'publish').and.callThrough();
        component.retrieveOsImages();
        expect(resetDcSpy).toHaveBeenCalled();
        expect(msgSpy).toHaveBeenCalled();
    });
});
