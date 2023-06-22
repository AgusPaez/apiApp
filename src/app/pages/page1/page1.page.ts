import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Meal, Categoria, RespuestaCategoria, RespuestaMeal } from 'src/app/interfaces/interface';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  arregloMeals: Meal[] = [];
  mealsFiltradas: Meal[] = [];
  valorBusqueda: string = '';
  mealImage: string = '';
  bandera: boolean=false;
  seleccion: any;

  ocultarCard() {
    this.bandera=false
    }
  mostrarCard(meal: Meal) {
    this.seleccion=meal
    this.bandera=true
    }

  filtrarMeals() {
    const valorBusqueda = this.valorBusqueda.toLowerCase();
    if (valorBusqueda) {
      this.mealsFiltradas = this.arregloMeals.filter(meal =>
        meal.strMeal.toLowerCase().includes(valorBusqueda)
      );
      
    } else {
      this.mealsFiltradas = this.arregloMeals;
    }
  }

  constructor(private route: ActivatedRoute,
              private service: ApiService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const strCategory = params.get('strCategory')|| '';
      console.log(strCategory);

      this.service.getMeals(strCategory).subscribe((respuesta) => {
        console.log(respuesta);
        this.arregloMeals = respuesta.meals;
        this.mealsFiltradas = this.arregloMeals
      });
    });
  }
}
