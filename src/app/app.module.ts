import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BarraComponent } from './components/barra/barra.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { EditarEstudiosComponent } from './components/editar-estudios/editar-estudios.component';
import { EditarSkillsComponent } from './components/editar-skills/editar-skills.component';
import { EditarExperienciaComponent } from './components/editar-experiencia/editar-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EstudiosComponent,
    SkillsComponent,
    ExperienciaComponent,
    ContactoComponent,
    BarraComponent,
    DescripcionComponent,
    LoginComponent,
    EditarEstudiosComponent,
    EditarSkillsComponent,
    EditarExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }