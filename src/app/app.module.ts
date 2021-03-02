import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {angularFireModule}'angular/fire';
import { AppComponent } from './app.component';
import { TitreComponent } from './component/titre/titre.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PatisserieComponent } from './component/patisserie/patisserie.component';
import { CuisineComponent } from './component/cuisine/cuisine.component';
import { SaladeComponent } from './component/salade/salade.component';
import { RegisteComponent } from './contact/registe/registe.component';
import { LoginComponent } from './contact/login/login.component';
import { ShowAllComponent } from './component/show-all/show-all.component';


@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    PatisserieComponent,
    CuisineComponent,
    SaladeComponent,
    RegisteComponent,
    LoginComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    angularFireModule.initializeapp({
      

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
