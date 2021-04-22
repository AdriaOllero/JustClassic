import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  cosas = [
    "../../assets/JustClassicFondo.png",
    "../../assets/fondoJustClassic.jpg",
    "../../assets/jakub-sisulak-a3fOMcZ3mYQ-unsplash.jpg"
  ]


}
