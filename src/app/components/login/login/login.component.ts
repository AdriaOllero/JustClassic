import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mForm: FormGroup;
  isSent = false;
  email = ""
  password = ""
  contact = ""

  constructor(private router: Router, private fb: FormBuilder, private usersService: UserService) {
    this.mForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/
          ),
        ],
      ],
    });
  }

  ngOnInit() { }

  // loginUser() {
  //   console.log('Estoy entrando al login, pero solo entrando');
  //   const user: User = new User();
  //   if (this.password != '' && this.email != '') {
  //     user.email = this.email;
  //     user.password = this.password;
  //     console.log(user);
  //     this.usersService.loginUser(user).subscribe(
  //       (data) => {
  //         localStorage.setItem('token', data.access_token);
  //         this.router.navigate(['/dashboard']);
  //         this.onSubmit
  //         this.logged
  //       },
  //       (error) => {
  //         console.log('Error:', error);
  //       }
  //     );
  //   }
  // }
  signup() {
    this.router.navigate(['/register']);
  }
  get f() {
    return this.mForm.controls;
  }
  logged() {
    this.router.navigate(['/perfilParticular']);
  }

  onSubmit() {
    this.isSent = true;

    console.log('Enviar form');

    if (this.mForm.invalid) {
      console.log("Form Invalido")
      return;
    }
    const user: User = new User()
    user.email = this.f.email.value
    user.password = this.f.password.value
    this.usersService.loginUser(user).subscribe(data => {
      localStorage.setItem("token",data.access_token)
      this.router.navigate(["/dashboard"])
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );

//   const user: User = new User();
//   if (this.password != '' && this.email != '') {
//     user.email = this.email;
//     user.password = this.password;
//     console.log(user);
  console.log('Login valido', this.mForm.value);
    // atacar a api
  }
}
