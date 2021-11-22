import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  index:number;
  heroeBorrado:string = '';

  heroes:string[] = ['Spiderman','IronMan','Hulk','Thor']


  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
    console.log("borrando....")
  }
}
