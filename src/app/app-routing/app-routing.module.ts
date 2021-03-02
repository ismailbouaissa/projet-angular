import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { ShowAllComponent } from '../component/show-all/show-all.component';
import { SaladeComponent } from '../component/salade/salade.component';
import { CuisineComponent } from '../component/cuisine/cuisine.component';
import { PatisserieComponent } from '../component/patisserie/patisserie.component';
import { RegisteComponent } from '../contact/registe/registe.component';
import { LoginComponent } from '../contact/login/login.component';


const Routes:Routes=[
  {path:"",component:ShowAllComponent},
  {path:"Patisserie", component:PatisserieComponent},
  {path:"cuisine",component:CuisineComponent},
  {path:"salade",component:SaladeComponent},
  {path:"register",component:RegisteComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
