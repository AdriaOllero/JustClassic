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
  User = { name: 'Pepe', lastName:'Garcia',typeUser: 'Particular', img:'../../../../assets/images/perfil-pepe.jpg',location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8920877215446!2d-78.61526208464393!3d-1.2346091990994936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a86c8c8dff%3A0x9fc9691652c2ff32!2sLas%20Bahamas%2C%20Ambato%20180104%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1619474341655!5m2!1ses!2ses' };

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
