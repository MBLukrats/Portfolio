import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
// import { EditarEstudiosComponent } from '../editar-estudios/editar-estudios.component';
// import { BotonesService } from 'src/app/servicios/botones.service';
// import { BotonesNo } from '../portfolio/portfolio.component';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'], 
  inputs: ['estadoBotones']
})
export class EstudiosComponent implements OnInit {

  educList: Array<any> = [];
  @Input() botones: string;

  constructor( private obtenerDatos:DatosService){
  }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatosJson().subscribe(data => {
      this.educList=data.estudios;
      console.log(this.educList);
    });
  }


}
