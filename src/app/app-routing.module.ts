import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'create-new-job',
    component: CreateNewJobComponent
  },
  {
    path:'job-details',
    component: JobDetailsComponent
  },
  {
    path:'job-listing',
    component: JobDetailsComponent
  },
  {
    path:'jobs',
    component: JobsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'my-jobs',
    component: HomeComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
