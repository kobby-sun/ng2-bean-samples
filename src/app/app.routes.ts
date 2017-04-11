import { Routes } from '@angular/router';
import { Samples } from './samples';

export const ROUTES: Routes = [
  { path: '', component: Samples },
  { path: '**', component: Samples },
];
