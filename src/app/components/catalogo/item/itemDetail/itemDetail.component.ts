import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../../../models/car.model';

@Component({
  selector: 'app-itemDetail',
  templateUrl: './itemDetail.component.html',
  styleUrls: ['./itemDetail.component.scss'],
})
export class ItemDetailComponent implements OnInit {

  showOptions = true;
  showShare = false;

  Car = {
    bio:'Cillum laborum aliquip officia magna do sunt est fugiat id incididunt. Magna laboris officia veniam cillum id exercitation adipisicing consectetur. Id deserunt aute dolor sint esse non esse exercitation aute officia aliqua quis excepteur labore. Incididunt mollit velit labore minim velit ad cupidatat labore adipisicing veniam.\r\n',
    name: 'Mercedes Benz Coupe',
    photo:['../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg',
    '../../../assets/images/johan-serfontein-EyhAAr5IJ2U-unsplash.jpg',
    '../../../assets/images/nathan-dumlao-gQYUUn5byyE-unsplash-min.jpg'],
    km: '20.000',
    model: 'C 63',
    year: '1987',
    brand: 'Mercedez-Benz',
    price: '64.000',
    fuel:'Gasolina'
  };


  constructor(public router: Router) {}

  ngOnInit() {}

}
