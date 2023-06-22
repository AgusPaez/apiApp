import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { Categoria } from '../interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  arregloCategorias: Categoria[]=[];
  categoriasFiltradas: Categoria[] = [];
  valorBusqueda: string = '';

  filtrarCategorias() {
    const valorBusqueda = this.valorBusqueda.toLowerCase();
    if (valorBusqueda) {
      this.categoriasFiltradas = this.arregloCategorias.filter(categoria =>
        categoria.strCategory.toLowerCase().includes(valorBusqueda)
      );
      
    } else {
      this.categoriasFiltradas = this.arregloCategorias;
    }
  }
  
  
  

  

  constructor(
    private service:ApiService     
    ) {}

  ngOnInit(){
    this.service.getCategorias().subscribe((respuesta)=>{
      console.log(respuesta)
      this.arregloCategorias=respuesta.categories
      this.categoriasFiltradas = this.arregloCategorias;
    })
    
  }

}
