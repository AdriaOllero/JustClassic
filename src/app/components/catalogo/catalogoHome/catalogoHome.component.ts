import { Car } from 'src/app/models/car.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-catalogoHome',
  templateUrl: './catalogoHome.component.html',
  styleUrls: ['./catalogoHome.component.scss']
})
export class CatalogoHomeComponent implements OnInit {
  allBest: Array<Car> = []
  allCategories: Array<Categoria> = []
  nameSearch: string = ""

  constructor(public router:Router,public matDialog: MatDialog) { }

  ngOnInit() {
    this.loadData()
  }


  loadData() {
    this.allBest=[
      {
        "name": "Audi 100",
        "photo": "../../../../assets/imgCategories/Audi 100 (1)-min.jpg",
      },
      {
        "name": "Audi Coupe 2.3",
        "photo": "../../../../assets/imgCategories/Audi Coupe 2.3 (1)-min.jpg",
      },
      {
        "name": "Mercedes Benz 560SL",
        "photo": "../../../../assets/imgCategories/Mercedes Benz 560SL (1)-min.jpg",
      },
      {
        "name": "Porche 911",
        "photo": "../../../../assets/imgCategories/Porche 911 (1)-min.jpg",
      }]
    this.allCategories=[
      {
        "name": "Todos",
        "photo": "../../../../assets/images/alex-suprun-A53o1drQS2k-unsplash.jpg",
        "description":"Todos los coches de la colección",
      },
      {
        "name": "Americanos",
        "photo": "../../../../assets/images/Americanos (2).jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Japoneses",
        "photo": "../../../../assets/images/Japoneses.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Alemanes",
        "photo": "../../../../assets/images/Aleman (2).jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Ingleses",
        "photo": "../../../../assets/images/Reino Unido.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Franceses",
        "photo": "../../../../assets/images/Frances.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Italianos",
        "photo": "../../../../assets/images/Italiano.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },

    ]}
}
