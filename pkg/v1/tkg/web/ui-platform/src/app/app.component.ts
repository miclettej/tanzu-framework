import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-ui-platform';

  constructor(private router: Router) {
  }

  navigateToWizard() {
    this.router.navigate(['management-cluster/vsphere-wizard']);
  }
}
