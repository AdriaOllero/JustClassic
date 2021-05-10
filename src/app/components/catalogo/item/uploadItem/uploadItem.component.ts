import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-uploadItem',
  templateUrl: './uploadItem.component.html',
  styleUrls: ['./uploadItem.component.scss']
})
export class UploadItemComponent implements OnInit {
  addCar: Array<Car> =[]

  constructor(private httpClient: HttpClient,private router: Router, private service:UserService) { }

  ngOnInit() {
  }


// saveCar(){
//   this.service.saveCar().subscribe((data) => {
//     console.log(data)
//     this.addCar = data
//   })
// }

}
