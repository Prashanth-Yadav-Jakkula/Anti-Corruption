import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActsComponent } from './acts/acts.component';
import { AdminComponent } from './admin/admin.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HOMEComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RejectedComponent } from './rejected/rejected.component';
import { SignupComponent } from './signup/signup.component';
import { SolvedComponent } from './solved/solved.component';

const routes: Routes = [
  {path: 'Admin',component: AdminComponent},
  {path: 'Complaints',component: ComplaintsComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'header',component: HeaderComponent},
  {path: 'home',component: HOMEComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'acts',component: ActsComponent},
  {path: 'contactus',component: ContactusComponent},
  {path: 'faqs',component: FaqsComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'solved',component: SolvedComponent},
  {path: 'rejected',component: RejectedComponent},
  {path: '',redirectTo:'home',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
