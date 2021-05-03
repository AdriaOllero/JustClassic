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
      this.router.navigate(["/catalogoHome"])
    } else {
      this.router.navigate(["/catalogoHome"], { queryParams: { name: searchValue}})
    }
  }

  cosas = [
    "../../../../assets/images/JustClassicFondo.png",
    "../../assets/images/fondoJustClassic.jpg",
    "../../assets/images/jakub-sisulak-a3fOMcZ3mYQ-unsplash.jpg"
  ]


}
