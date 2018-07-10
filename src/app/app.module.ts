///<reference path="../../node_modules/@angular/forms/src/form_providers.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import {CustomerService} from './services/customer.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AvailableComponent } from './available/available.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhysicalComponent } from './physical/physical.component';
import { OwnershipComponent } from './ownership/ownership.component';
import { EngineComponent } from './engine/engine.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreviewComponent } from './preview/preview.component';
import { LandingComponent } from './landing/landing.component';

const routes = [
    {
      path: '',
      component: HomeComponent
    },

    {
      path: 'register',
      component: RegistrationComponent
    },

    {
      path: 'login',
      component: LoginComponent
    },

    {
      path: 'available',
      component: AvailableComponent
    },

    {
      path: 'dashboard',
      component: DashboardComponent
    },

    {
      path: 'physical',
      component: PhysicalComponent
    },

    {
      path: 'ownership',
      component: OwnershipComponent
    },

    {
      path: 'engine',
      component: EngineComponent
    },

    {
      path: 'about',
      component: AboutComponent
    },

    {
      path: 'contact',
      component: ContactComponent
    },

    {
      path: 'help',
      component: HelpComponent
    },

    {
      path: 'preview',
      component: PreviewComponent
    },

    {
      path: 'index',
      component: LandingComponent
    },

    {
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AvailableComponent,
    DashboardComponent,
    PhysicalComponent,
    OwnershipComponent,
    EngineComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    NotFoundComponent,
    PreviewComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
