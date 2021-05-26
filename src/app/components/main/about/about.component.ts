import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  Car = {
    bio:'Cillum laborum aliquip officia magna do sunt est fugiat id incididunt. Magna laboris officia veniam cillum id exercitation adipisicing consectetur. Id deserunt aute dolor sint esse non esse exercitation aute officia aliqua quis excepteur labore. Incididunt mollit velit labore minim velit ad cupidatat labore adipisicing veniam.\r\n',
    name: 'Mercedes Benz Coupe',
    photo:['../../../assets/images/Img Carrusel (1).jpg',
    '../../../assets/images/Img Carrusel (2).jpg',
    '../../../assets/images/Img Carrusel (3).jpg',
    '../../../assets/images/oli-woodman-kA8icki31uo-unsplash.jpg',
    '../../../assets/images/johan-serfontein-EyhAAr5IJ2U-unsplash.jpg',
    ],
    km: '20.000',
    model: 'C 63',
    year: '1987',
    brand: 'Mercedez-Benz',
    price: '64.000',
    fuel:'Gasolina'
  };
  constructor() { }

  ngOnInit() {
  }

}
