import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
            <h1>{{titulo}}</h1>
            <h3>La base es: <strong>55</strong></h3>


             <button (click)="acumular()"> +{{base}} </button>

             <span> {{numero}} </span>

             <button (click)="decrementar()"> -{{base}} </button>

     `

})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular() {
        this.numero += this.base;
    }

    decrementar() {
        this.numero -= this.base;
    }
}