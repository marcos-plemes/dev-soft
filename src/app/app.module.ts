import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './componentes/login/sign-in/sign-in.component';
import { SignInService } from './componentes/login/sign-in/sign-in.service';
import { SignUpComponent } from './componentes/login/sign-up/sign-up.component';
import { WrapperComponent } from './componentes/comum/wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LeftSidebarComponent } from './componentes/comum/wrapper/left-sidebar/left-sidebar.component';
import { LeftSidebarItemComponent } from './componentes/comum/wrapper/left-sidebar/left-sidebar-item/left-sidebar-item.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    WrapperComponent,
    LeftSidebarComponent,
    LeftSidebarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    SignInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
