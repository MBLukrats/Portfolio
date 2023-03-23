import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  miInfo:any;

  constructor( private obtenerDatos:DatosService){

  }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatosJson().subscribe(data => {
      this.miInfo = data;
    });
  }
}
