import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  form: FormGroup;
  email:string="";
  password:string="";
  @Output() usuarioIniciado:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emailUsuario:EventEmitter<string> = new EventEmitter<string>();
  usuarioOk:boolean=true;

  constructor(private service:LoginServiceService,private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator]],
    });
  }


  mostrarMenu(){
    this.usuarioOk= true;
    this.usuarioIniciado.emit(this.usuarioOk)
    this.service.usuarioIniciado = this.email;
    this.emailUsuario.emit(this.email);
    
  }
  
  emailValidator(control:any) {
    const email = control.value;
    if (email && !email.endsWith('@frc.utn.edu.ar')) {
      return { invalidEmail: true };
    }
    return null;
  }
  

}
