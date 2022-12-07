import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './modals/login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { RedesComponent } from './redes/redes.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { IndexComponent } from './index/index.component';
import { ButtonLogoutComponent } from './button-logout/button-logout.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { BannerDashboardComponent } from './banner-dashboard/banner-dashboard.component';
import { AcercaDeDashboardComponent } from './acerca-de-dashboard/acerca-de-dashboard.component';
import { ExperienciadashboardComponent } from './experienciadashboard/experienciadashboard.component';
import { EducaciondashboardComponent } from './educaciondashboard/educaciondashboard.component';
import { SkillsdashboardComponent } from './skillsdashboard/skillsdashboard.component';
import { ProyectosdashboardComponent } from './proyectosdashboard/proyectosdashboard.component';
import { BannermodalComponent } from './modals/bannermodal/bannermodal.component';
import { FotoComponent } from './modals/foto/foto.component';
import { DatospersonalesComponent } from './modals/datospersonales/datospersonales.component';
import { AcercaComponent } from './modals/acerca/acerca.component';
import { ExperienciamodalComponent } from './modals/experienciamodal/experienciamodal.component';
import { EducacionmodalComponent } from './modals/educacionmodal/educacionmodal.component';
import { SkillsmodalComponent } from './modals/skillsmodal/skillsmodal.component';
import { ProyectosmodalComponent } from './modals/proyectosmodal/proyectosmodal.component';


@NgModule({
  declarations: [			
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    RedesComponent,
    ButtonLoginComponent,
    IndexComponent,
    ButtonLogoutComponent,
    NavbardashboardComponent,
    BannerDashboardComponent,
    AcercaDeDashboardComponent,
    ExperienciadashboardComponent,
    EducaciondashboardComponent,
    SkillsdashboardComponent,
    ProyectosdashboardComponent,
    BannermodalComponent,
    FotoComponent,
    DatospersonalesComponent,
    AcercaComponent,
    ExperienciamodalComponent,
    EducacionmodalComponent,
    SkillsmodalComponent,
    ProyectosmodalComponent,
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
