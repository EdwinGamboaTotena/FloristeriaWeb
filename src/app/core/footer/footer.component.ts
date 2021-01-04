import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }


  fixearPosicion(): boolean {
    const contenido = document.getElementById('contenido');
    const height = (contenido != null) ? contenido.offsetHeight : 700;
    return (height < (screen.height * 0.8)) ? true : false;
  }

}
