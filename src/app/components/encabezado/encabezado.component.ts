import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miInfo:any;

  constructor( private obtenerDatos:DatosService){

  }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatosJson().subscribe(data => {
      this.miInfo = data;
    });
  }


}
