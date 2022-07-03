import { Component, OnInit } from '@angular/core';
import { AppComponent} from 'src/app/app.component';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Usuario } from '../../Interface/usuario'
import { AuthServiceService } from '../../service/auth-service/auth-service.service'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})


export class LoginScreenComponent implements OnInit {

  form :FormGroup
  rut:AbstractControl;
  password:AbstractControl;
  lista:Array<Usuario> = []
  
  constructor(public fb:FormBuilder, private servicioCliente:AuthServiceService) {

    this.form = this.fb.group({
      rut:['',Validators.required],
      password:['',Validators.required],
    })
    this.rut = this.form.controls["rut"];
    this.password = this.form.controls["password"];

   }

  ngOnInit(): void {
    // this.nav.hide();
  }

  compararUsuario(){

    this.servicioCliente.obtenerUsuario(this.rut.value).subscribe(datos=>{

      for(let i = 0; i < datos.length; i++){
        this.lista.push(datos[i]);
      }
    })
  }

}
