import { Injectable } from '@angular/core';
import { Usuario } from '../../Interface/usuario';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const bcrypt = require('bcryptjs');

const encrypt = async (textPlain: any) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (passwordPlain: any, hashPassword: any) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  servidor = 'http://localhost:3001';

  constructor(private servicio: HttpClient) {}

  obtenerUsuario(rut: any): Observable<any> {
    console.log(rut);
    return this.servicio.get(`${this.servidor}/usuario/${rut}`);
  }

  login = async (hashedPass: any, password: any) => {
    console.log(password);

    const checkPass = await compare(password, hashedPass);
    console.log(checkPass);
    let flag;

    if (checkPass == true) {
      return (flag = true);
    } else {
      return (flag = false);
    }
  };
}
