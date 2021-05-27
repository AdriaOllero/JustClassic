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
  photo = '';
  customDisplay = false;
  mForm = FormGroup;

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
  // deleteCar() {
  //   let id = localStorage.getItem('id');
  //   this.userService.deleteCar().subscribe(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log('Error:', error);
  //     }
  //   );
  //   this.router.navigate([`perfilParticular/${id}`]);
  // }

  handleFileImage(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files.item(0));
    reader.onload = () => {
      this.photo = reader.result as string;
      console.log(this.photo);
    };
  }
}
