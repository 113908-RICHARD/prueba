import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  usuarioIniciado:string="";
  
  public getUsuarioIniciado(){
    return this.usuarioIniciado;
  }
}
