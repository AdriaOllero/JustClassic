import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';
import { Car } from 'src/app/models/car.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-uploadItem',
  templateUrl: './uploadItem.component.html',
  styleUrls: ['./uploadItem.component.scss'],
})
export class UploadItemComponent implements OnInit {
  addCar: Array<Car> = [];
  mForm: FormGroup;

  name = '';
  bio = '';
  year = '';
  photo = '';
  km = '';
  model = '';
  brand = '';
  fuel = '';
  doors = '';
  seats = '';
  location = '';
  price = '';
  isSent = false;
  customDisplay = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.mForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      bio: [],
      year: [],
      // photo: [],
      km: [],
      model: [],
      brand: [],
      fuel: [],
      doors: [],
      seats: [],
      location: [],
      price: [],
    });
  }

  ngOnInit() {}

  addNewCar(
    carName: string,
    carBio: string,
    carYear: string,
    carKm: string,
    carModel: string,
    carBrand: string,
    carFuel: string,
    carDoors: string,
    carSeats: string,
    carLocation: string,
    carPrice: string
  ) {
    console.log('Estamos intentando añadir un nuevo vehiculo');

    const car: Car = new Car();
    car.name = carName;
    car.bio = carBio;
    car.year = carYear;
    car.photo = this.photo;
    car.km = carKm;
    car.fuel = carFuel;
    car.model = carModel;
    car.brand = carBrand;
    car.doors = carDoors;
    car.seats = carSeats;
    car.location = carLocation;
    car.price = carPrice;

    console.log(car);
    console.log('HOla gente');

    this.userService.postCar(car).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/catalogo']);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '220px',
    height: '140px',
  };

  handleFileImage(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files.item(0));
    reader.onload = () => {
      this.photo = reader.result as string;
      console.log(this.photo);
    };
  }

  onSubmit() {
    console.log('Enviar form');
    this.isSent = true;
    if (this.mForm.invalid) {
      console.log('Invalido');
      return;
    }
    console.log('entreeee perros');
    const car: Car = new Car();
    if (
      this.name != '' &&
      this.bio != '' &&
      this.location != '' &&
      this.year != '' &&
      this.photo != '' &&
      this.km != '' &&
      this.model != '' &&
      this.brand != '' &&
      this.fuel != '' &&
      this.doors != '' &&
      this.seats != '' &&
      this.location != '' &&
      this.price != ''
    ) {
      car.name = this.name;
      car.bio = this.bio;
      car.year = this.year;
      car.photo = this.photo;
      car.km = this.km;
      car.model = this.model;
      car.brand = this.brand;
      car.fuel = this.fuel;
      car.doors = this.doors;
      car.seats = this.seats;
      car.location = this.location;
      car.price = this.price;

    }
    console.log('Car Valido', this.mForm.value);
    this.router.navigate(['/home']);
  }
}
