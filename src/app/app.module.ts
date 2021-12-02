import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactComponent } from './contact/contact.component';
import { InsertionDataComponent } from './insertion-data/insertion-data.component';
import { EditionDataComponent } from './edition-data/edition-data.component';
import { ValidationDataComponent } from './validation-data/validation-data.component';
import { ForOhFourComponent } from './for-oh-four/for-oh-four.component';



const appRoutes: Routes= [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'insert', component: InsertionDataComponent},
  {path: 'edit', component: EditionDataComponent},
  {path: 'validate', component: ValidationDataComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile',component: ProfileComponent},
  {path: ' ', redirectTo: 'home'},
  {path: 'not-found', component: ForOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SearchPageComponent,
    ContactComponent,
    InsertionDataComponent,
    EditionDataComponent,
    ValidationDataComponent,
    ForOhFourComponent
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
