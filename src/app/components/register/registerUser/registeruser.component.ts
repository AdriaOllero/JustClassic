import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']


})

export class RegisteruserComponent implements OnInit {
  mForm: FormGroup
  isSent = false

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {

    this.mForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]],
      repeat_password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
    })

   }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["/login"])
  }

  get f() {
    return this.mForm.controls
  }

  onSubmit() {

    this.isSent = true

    console.log("Enviar form");

    if(this.mForm.invalid) {
      return
    }

    const user: User = new User()
    user.email = this.f.email.value
    user.password = this.f.password.value
    this.userService.registerUser(user).subscribe((data: any) => {
      this.router.navigate(["/login"])
    },
      error => {
        console.log("Error:", error);
      }
    );

  }
}


