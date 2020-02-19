import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { materialModule } from './app.material';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import{AuthGuard} from './Services/auth.guard';
import { NotesComponent } from './Component/notes/notes.component';
import { CreateNotesComponent } from './Component/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Component/display-notes/display-notes.component';
import { IconComponent } from './Component/icon/icon.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    NotesComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }