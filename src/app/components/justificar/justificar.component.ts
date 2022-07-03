import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { readFileSync, writeFileSync} from 'fs';
import { ServiceService } from '../../service/justificacion-service/service.service'

import { listUsers, Justificacion } from 'src/app/Interface/justificacion';


@Component({
  selector: 'app-justificar',
  templateUrl: './justificar.component.html',
  styleUrls: ['./justificar.component.scss']
})

export class JustificarComponent implements OnInit {
  
  formulario:FormGroup;
  nombre:AbstractControl;
  apellido:AbstractControl;
  curso:AbstractControl;
  asunto:AbstractControl;
  mensaje:AbstractControl;
  listaJustificacion:Array<Justificacion> = [];
  flag = false;
  
  
  constructor(public fb:FormBuilder, private servicioCliente:ServiceService) { 

    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      curso:['',Validators.required],
      asunto:['',Validators.required],
      mensaje:['',Validators.required],
    });
    
    this.nombre = this.formulario.controls["nombre"];
    this.apellido = this.formulario.controls["apellido"];
    this.curso = this.formulario.controls["curso"];
    this.asunto = this.formulario.controls["asunto"];
    this.mensaje = this.formulario.controls["mensaje"];
    this.listaJustificacion = listUsers;
  }

  ngOnInit(): void {

  }

  crearJust(){
    this.servicioCliente.crearJustificacion( {   
      id: 0,
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      curso: this.curso.value,
      asunto: this.asunto.value,
      mensaje: this.mensaje.value}).subscribe( respuesta =>{

        console.log(respuesta);

      });
  }

  mostrarJustificacion(){

    this.servicioCliente.obtenerJustificacion().subscribe(datos =>{
      for(let i = 0; i < datos.length; i++){
        this.listaJustificacion.push(datos[i]);
      }
    })
  }

  eliminarJustificacion(id:any){
    console.log(id)
    this.servicioCliente.eliminarJustificacion(id).subscribe();
    this.listaJustificacion = this.listaJustificacion.filter(x => x.id != id);
  }
}
