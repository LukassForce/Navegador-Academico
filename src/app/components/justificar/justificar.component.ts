import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listUsers, Justificacion } from 'src/app/Interface/usuario';

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
  listaJustificacion:Array<Justificacion>;
  
  constructor(public fb:FormBuilder) { 
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
    let justifi:Justificacion={
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      curso: this.curso.value,
      asunto: this.asunto.value,
      mensaje: this.mensaje.value
    }
    this.listaJustificacion.push(justifi);
    console.log(this.listaJustificacion);
  }
}
