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
        "name": "Todos",
        "photo": "../../../../assets/images/robin-vet-q6LFMQ6wVZ0-unsplash.jpg",
      },
      {
        "name": "Americanos",
        "photo": "../../../../assets/images/robin-vet-q6LFMQ6wVZ0-unsplash.jpg",
      },
      {
        "name": "Japoneses",
        "photo": "../../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg",
      },
      {
        "name": "Alemanes",
        "photo": "../../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg",
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
