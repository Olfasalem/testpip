import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FinanceComponent } from './finance/finance.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'ajout',component:AjoutComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'finance',component:FinanceComponent},
  { path:'work',component:WorkComponent},
  { path:'login',component:LoginComponent},
  { path:'admin',component:AdminComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
