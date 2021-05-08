import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  showLogin = false;
  showUser = true;
  color = true;
  User = {
    name: 'Pepe',
    lastName: 'Garcia',
    typeUser: 'Particular',
    img: '../../../../assets/images/perfil-pepe.jpg',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8920877215446!2d-78.61526208464393!3d-1.2346091990994936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a86c8c8dff%3A0x9fc9691652c2ff32!2sLas%20Bahamas%2C%20Ambato%20180104%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1619474341655!5m2!1ses!2ses',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    window.onscroll = function () {
      myFunction();
    };
    let headed = document.getElementById('myHeader');
    let sticky = headed!!.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        headed!!.classList.add('sticky');
      } else {
        headed!!.classList.remove('sticky');
      }
    }
  }
  // onWindowScroll() {
  //   let element = document.querySelector('myHeader') as HTMLElement;
  //   if (window.pageYOffset > element.clientHeight) {
  //     this.color = true;
  //   } else {
  //     this.color = false;
  //   }
  // }
}
