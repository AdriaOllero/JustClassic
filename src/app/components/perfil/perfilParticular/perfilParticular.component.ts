import { Car } from './../../../models/car.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilParticular',
  templateUrl: './perfilParticular.component.html',
  styleUrls: ['./perfilParticular.component.scss'],
})
export class PerfilParticularComponent implements OnInit {
  allCars: Array<Car> = [];
  User = { name: 'Pepe', lastName:'Garcia',typeUser: 'Particular', img:'../../../../assets/images/perfil-pepe.jpg',location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8920877215446!2d-78.61526208464393!3d-1.2346091990994936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a86c8c8dff%3A0x9fc9691652c2ff32!2sLas%20Bahamas%2C%20Ambato%20180104%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1619474341655!5m2!1ses!2ses' };

  constructor(public router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.allCars = [
      {
        bio:
          'Cillum laborum aliquip officia magna do sunt est fugiat id incididunt. Magna laboris officia veniam cillum id exercitation adipisicing consectetur. Id deserunt aute dolor sint esse non esse exercitation aute officia aliqua quis excepteur labore. Incididunt mollit velit labore minim velit ad cupidatat labore adipisicing veniam.\r\n',
        name: 'Danielle Frye',
        photo:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        km: '20.000km',
        model: 'C 63',
        year: '2018',
        brand: 'Mercedez-Benz',
      },
      {
        bio:
          'Elit ad ipsum exercitation Lorem ea quis irure elit ea sunt sunt ex in deserunt. Fugiat irure ipsum cupidatat ad ullamco velit nostrud aliquip. Qui do est ea id Lorem magna ipsum proident.\r\n',
        name: 'Lee Mendoza',
        photo:
          'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        km: '20.000km',
        model: 'C 63',
        year: '2018',
        brand: 'Mercedez-Benz',
      },
      {
        bio:
          'Aute excepteur sit eu ipsum cupidatat cupidatat anim quis pariatur veniam officia exercitation. Aliqua esse adipisicing eu laborum occaecat officia eu. Eu eu eu elit eu pariatur ea aute aliquip minim do officia consectetur. Magna sint veniam duis ad cupidatat veniam ex incididunt enim nostrud ullamco exercitation amet. Consequat enim pariatur ut cillum cupidatat et et adipisicing labore dolore ad veniam. Officia qui ea Lorem eu ea esse. Eu est laboris sint occaecat eu velit incididunt reprehenderit.\r\n',
        name: 'Ortega Herman',
        photo:
          'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        km: '20.000km',
        model: 'C 63',
        year: '2018',
        brand: 'Mercedez-Benz',
      },
    ];
  }
}
