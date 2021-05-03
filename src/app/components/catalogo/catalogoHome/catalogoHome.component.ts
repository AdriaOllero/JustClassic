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

  allCategories: Array<Categoria> = []
  nameSearch: string = ""

  constructor(public router:Router,public matDialog: MatDialog) { }

  ngOnInit() {
    this.loadData()
  }
  loadData() {
    this.allCategories=[
      {
        "name": "Americanos",
        "photo": "../../../../assets/images/robin-vet-q6LFMQ6wVZ0-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Japoneses",
        "photo": "../../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Alemanes",
        "photo": "../../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "Ingleses",
        "photo": "../../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
      {
        "name": "1970´s",
        "photo": "../../../../assets/images/wahyu-setiawan-qWjfWJLlnQc-unsplash.jpg",
        "description":"  Aqui podras encontrar coches de los años 20",
      },
    ]}
}
