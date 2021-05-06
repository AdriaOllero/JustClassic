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
    "../../assets/images/jakub-sisulak-a3fOMcZ3mYQ-unsplash.jpg",
    "../../../../assets/images/brianna-santellan-TrvLsDu4sHk-unsplash.jpg",
    "../../../../assets/images/jakub-sisulak-a3fOMcZ3mYQ-unsplash.jpg",
    "../../../../assets/images/alexander-schimmeck-aIB0x7Qm8uA-unsplash.jpg",
    "../../../../assets/images/jakob-owens-U_2kP7bkFKw-unsplash.jpg",
    "../../../../assets/images/johannes-giez-hGIzTJ2Jvmw-unsplash.jpg",
    "../../../../assets/images/joris-visser--jRDL2az1zk-unsplash.jpg",

  ]


}
