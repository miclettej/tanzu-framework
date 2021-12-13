
import { Routes } from "@angular/router";
import { StartComponent } from './start/start.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: StartComponent,
    pathMatch: 'full'
  },
  {
    path: 'management-cluster',
    loadChildren: () => import('myFirstApp/Module').then(m => m.ManagementClusterModule)
    // loads a module from within myFirstApp, not recommended to load the app module - look up why again
  }
  // TODO: load routes dynamically
];
