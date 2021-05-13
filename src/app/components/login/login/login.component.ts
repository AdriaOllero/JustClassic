import { Login } from './../../../models/login.model';
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
  email = '';
  password = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
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

  ngOnInit() {
    //Comprobar si estoy logueado, si estoy logueado que vaya al dasbboard
  }

  signup() {
    this.router.navigate(['/register']);
  }

  get f() {
    return this.mForm.controls;
  }

  onSubmit() {
    console.log('Enviar form');
    this.isSent = true;
    if (this.mForm.invalid) {
      console.log('Login Invalido');
      return;
    }
    const user: User = new User();
    console.log('Usuario y contraseña estan' + this.email + this.password);
    if (this.password != '' && this.email != '') {
      user.email = this.email;
      user.password = this.password;
      console.log("hola");

      this.userService.loginUser(user).subscribe(

        (data) => {
          console.log("hombree");
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('username', data.username);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
    console.log('Login Valido', this.mForm.value);
    // this.router.navigate(['/']);
  }
}
