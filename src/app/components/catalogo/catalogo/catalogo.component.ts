import { Car } from './../../../models/car.model';
import { UserService } from 'src/app/services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { SharedService } from 'src/app/services/shared.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  // @Input() car:Car= {};

  nameSearch: string = '';

  User = {
    name: 'Pepe',
    lastName: 'Garcia',
    typeUser: 'Particular',
    img: '../../../../assets/images/perfil-pepe.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8920877215446!2d-78.61526208464393!3d-1.2346091990994936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a86c8c8dff%3A0x9fc9691652c2ff32!2sLas%20Bahamas%2C%20Ambato%20180104%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1619474341655!5m2!1ses!2ses',
  };

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  allCars: Array<Car> = []
  allCategories = this.sharedService.getCategoryList();

  ngOnInit(): void {

    this.loadCars()

  }
  detail(id?:string) {
    this.router.navigate([`itemDetail/${id}`]);
  }

  loadCars() {
    const params = 'an'
    this.userService.getCars().subscribe(
      (data) => {
        this.allCars = data;
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  // search(searchValue: HTMLInputElement) {
  //   console.log(searchValue.value);
  //   searchValue.value;
  //   if (searchValue.value !== '') {
  //     this.loadCars().filter((car: Car) => {
  //       return car.name?.includes(searchValue.value);
  //     });
  //     console.log('patata');
  //   } else {
  //     this.loadCars()
  //   }
  // }
}
