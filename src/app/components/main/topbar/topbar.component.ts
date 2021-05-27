import { User } from './../../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Input() userName: any = {};

  showLogin = true;
  showUser = false;
  color = true;
  user = false;
  profile = '';
  id = '';
  User: User = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private sharedSevice: SharedService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.authService.isAuthenticated()) {
          this.userName = this.sharedSevice.getUsername();
          this.user = true;
          this.getNavbarChange();
          console.log(this.user);
        }
      }
    });

    this.loadUser();
  }

  loadUser() {
    let id = localStorage.getItem('id') as string;
    this.userService.getUser(id).subscribe(
      (data) => {
        this.User = data;
        console.log(this.User);
        console.log('hola');
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

  getNavbarChange() {
    console.log('Estoy entrando');
    if (this.user === true) {
      this.showUser = true;
      this.showLogin = false;
      console.log('True bro');
    } else {
      this.showUser = false;
      this.showLogin = true;
      console.log('Que ise loco soy false');
    }
  }
}
