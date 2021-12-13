import {Component, Input, OnInit} from '@angular/core';
import { BasicSubscriber } from 'management-cluster/src/app/shared/abstracts/basic-subscriber';

@Component({
    selector: 'app-error-notification',
    templateUrl: './error-notification.component.html'
})
export class ErrorNotificationComponent extends BasicSubscriber implements OnInit {
    @Input() errorNotification: any;

    ngOnInit() {
    }
}
