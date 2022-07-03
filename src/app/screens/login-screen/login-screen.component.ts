import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Usuario } from '../../Interface/usuario'
import { AuthServiceService } from '../../service/auth-service/auth-service.service'
import { Router, RouterModule } from '@angular/router'


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})


export class LoginScreenComponent implements OnInit {

  form: FormGroup
  rut: AbstractControl;
  password: AbstractControl;
  lista: Array<Usuario> = []

  constructor(public fb: FormBuilder, private servicioCliente: AuthServiceService, private router: Router) {

    this.form = this.fb.group({
      rut: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.rut = this.form.controls["rut"];
    this.password = this.form.controls["password"];

  }

  ngOnInit(): void {
    // this.nav.hide();
  }

  compararUsuario() {

    let rutid = this.rut.value;
    this.servicioCliente.obtenerUsuario(rutid).subscribe(datos => {

      let pass = datos[0].password;
      let flag = this.servicioCliente.login(pass, this.password.value);
      let redirect = this.router;
      a();
      async function a() {
        if ((await flag).valueOf()) {
          console.log('riaaal')
          redirect.navigate(['home']);
        }
        else {
          console.log('falsoo')
          //location.reload();
        }
      }
    })
  }
}
