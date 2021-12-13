import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  constructor(public router: Router) {
  }

  goToWizard() {
    this.router.navigate(['vsphere-wizard'])
  }
}
