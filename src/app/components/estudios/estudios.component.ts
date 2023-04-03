import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditarEstudiosComponent } from '../editar-estudios/editar-estudios.component';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  educList: Array<any> = [];

  constructor( private obtenerDatos:DatosService){

  }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatosJson().subscribe(data => {
      this.educList=data.estudios;
      console.log(this.educList);
    });
  }


}
