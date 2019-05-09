import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgForm, FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';

// import { AssignmentComponent } from './dashboard/assignment/assignment.component';
import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'join', component: JoinComponent},
  { path: 'login', component: LoginComponent},
  // { path: 'assigment', component: AssignmentComponent},
  { path: 'logout', component: LogoutComponent},
  // { path: 'dashboard/assignment', component: AssignmentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinComponent,
    DashboardComponent,
    // AssignmentComponent,
    LogoutComponent,
    LoginComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
