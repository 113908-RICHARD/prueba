import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { RecetasService } from '../recetas.service';
import { Receta } from '../receta';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  cerrarSesion:boolean=false;
  @Output() cerrarSesionEmiter:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() email:string="";
  listaRecetas:Receta[]=[];
  constructor(private service: RecetasService){}


  bringRecepies(){
    this.listaRecetas = this.service.getRecetas();
   
  }
  deleteRecepie(recepie:Receta){
    const index = this.listaRecetas.indexOf(recepie);
    if (index !== -1) {
      // Remove the recipe from the array
      this.listaRecetas.splice(index, 1);
    
  }
 
}
volverLogin(){
    this.cerrarSesion= true;
    this.cerrarSesionEmiter.emit(this.cerrarSesion);
  }
}
