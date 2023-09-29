import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginChallenge';

  mostrarLogin:boolean=true;
  mostrarHome:boolean=false;
  sfs:boolean=true;
  sfs2:boolean=false;
  email:string="";

constructor(private service:LoginServiceService){

}

  getUsuarioLogin(login:boolean){
    if(login == true){
        this.mostrarLogin= false;
        this.mostrarHome = true;
        this.email = this.service.usuarioIniciado;
        
    }
   
  }
  getEmailUsuario(email:string){
    this.email = email;
    
  }
  getCerrarSesion(login:boolean){

    if(login == true){
      this.mostrarHome=false;
      this.mostrarLogin=true;
    }
    
  }
  
  
}
