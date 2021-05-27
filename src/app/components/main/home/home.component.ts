import { Car } from 'src/app/models/car.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private router: Router, private sharedService:SharedService) { }

  ngOnInit() {

  }
  search(searchValue: string){
    if(searchValue == "") {
      this.router.navigate(["/"])
    } else {
      this.router.navigate(["/catalogo"], { queryParams: { name: searchValue}})
    }
  }
  // search(searchValue: HTMLInputElement) {
  //   console.log(searchValue.value);
  //   searchValue.value;
  //   if (searchValue.value !== '') {
  //     this.sharedService.allCars = this.sharedService.allCars.filter((car: Car) => {
  //       return car.name?.toLowerCase().includes(searchValue.value.toLowerCase());
  //     });
  //     console.log('patata');
  //   } else {
  //     this.sharedService.allCars = this.sharedService.getCarList();
  //   }
  // }

  imagenesFondoCarrusel = [
    "../../../../assets/images/JustClassicFondo.png",
    "../../assets/images/fondoJustClassic.jpg",
    "../../assets/images/jakub-sisulak-a3fOMcZ3mYQ-unsplash.jpg",
    "../../../../assets/images/robin-vet-q6LFMQ6wVZ0-unsplash.jpg",
    "../../../../assets/images/valdemaras-januska-igaoYBHBDws-unsplash.jpg",
    "../../../../assets/images/alexander-schimmeck-aIB0x7Qm8uA-unsplash.jpg",
    "../../../../assets/images/jakob-owens-U_2kP7bkFKw-unsplash.jpg",
    "../../../../assets/images/johannes-giez-hGIzTJ2Jvmw-unsplash.jpg",
    "../../../../assets/images/joris-visser--jRDL2az1zk-unsplash.jpg",
  ]
}
