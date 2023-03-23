import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  miInfo:any;

  constructor( private obtenerDatos:DatosService){

  }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatosJson().subscribe(data => {
      this.miInfo = data;
    });
  }



}
