import { User } from './../../../../models/user.model';
import { Car } from './../../../../models/car.model';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-itemDetail',
  templateUrl: './itemDetail.component.html',
  styleUrls: ['./itemDetail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  showShare = true;
  customDisplay = false;
  mForm = FormGroup;

  photo = '';
  name = '';
  bio = '';

  User: User = {};
  Car: Car = {};
  allCars: Array<Car> = [];

  constructor(
    public router: Router,
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((parm) => {
      console.log(parm.id);
    });
  }

  ngOnInit() {
    this.loadUser();
    this.loadCar();
  }

  loadCar() {
    this.activeRoute.params.subscribe((params) => {
      this.userService.getCar(params.id).subscribe((data) => {
        this.Car = data;
        console.log(data);
        //this.jobOffer = data
      });
    });
  }

  loadUser() {
    let id = localStorage.getItem('id') as string;
    this.userService.getUser(id).subscribe(
      (data) => {
        this.User = data;
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  perfilUser() {
    let id = localStorage.getItem('id');
    this.router.navigate([`perfilParticular/${id}`]);
  }

  updateCar(carName: string, carBio: string) {
    const car: Car = new Car();
    car.name = carName;
    car.bio = carBio;

    console.log(carName);
    console.log(carBio);
    this.activeRoute.params.subscribe((params) => {
      this.userService.updateCar(params.id,car).subscribe(
        (data) => {
          carName = this.name
          carBio = this.bio
          console.log("estoy entrando");
          console.log(data);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    });
  }
  deleteCar() {
    this.activeRoute.params.subscribe((params) => {
      this.userService.deleteCar(params.id).subscribe((data) => {
        this.Car = data;
        console.log(data);
        //this.jobOffer = data
      });
    });
    this.router.navigate([`/catalogo`]);
  }

  handleFileImage(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files.item(0));
    reader.onload = () => {
      this.photo = reader.result as string;
      console.log(this.photo);
    };
  }
}
