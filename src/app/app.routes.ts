import { Routes } from '@angular/router';
import { Vue1Component } from './vue1/vue1.component';
import { Vue2Component } from './vue2/vue2.component';
import { Vue3Component } from './vue3/vue3.component';

export const routes: Routes = [
  { path: 'vue1', component: Vue1Component },
  { path: 'vue2', component: Vue2Component },
  { path: 'vue3', component: Vue3Component },
  { path: '', redirectTo: '/vue1', pathMatch: 'full' }
];
