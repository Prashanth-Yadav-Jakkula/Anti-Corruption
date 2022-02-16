import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HOMEComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActsComponent } from './acts/acts.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SolvedComponent } from './solved/solved.component';
import { RejectedComponent } from './rejected/rejected.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ComplaintsComponent,
    HeaderComponent,
    FooterComponent,
    HOMEComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    AboutusComponent,
    ActsComponent,
    FaqsComponent,
    SolvedComponent,
    RejectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
