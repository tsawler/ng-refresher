import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { PersonsComponent} from './persons/persons.component';
import { PersonInputComponent} from './persons/person-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent},
  { path: 'input', component: PersonInputComponent},
];

export class AppRoutingModule {}
