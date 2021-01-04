import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    public categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
  }

}
