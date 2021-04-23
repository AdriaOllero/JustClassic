import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {

  }

  search(searchValue: string){
    if(searchValue == "") {
      this.router.navigate(["/catalogo"])
    } else {
      this.router.navigate(["/catalogo"], { queryParams: { name: searchValue}})
    }
  }

  cosas = [
    "../../assets/JustClassicFondo.png",
    "../../assets/fondoJustClassic.jpg",
    "../../assets/jakub-sisulak-a3fOMcZ3mYQ-unsplash.jpg"
  ]


}
