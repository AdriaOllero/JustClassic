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

    /*Hacer llamada al service
    Hacer dos servicios: user, people
    llamar al servicio de login y en la respuesta guardar en el localStorage el token y redirigir al DASHBOARD
    */

    const login: Login = new Login()
    login.email = this.f.email.value
    login.password = this.f.password.value
    console.log(login)
    this.userService.loginUser(login).subscribe((data: any) => {
      localStorage.setItem("token",data.access_token)
      this.router.navigate(["/uploadItem"])
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );




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
//----------------------------------------------------------------------------------------------
  // get f() {
  //   return this.mForm.controls;
  // }

  // onSubmit() {
  //   this.isSent = true;

  //   console.log('Enviar form');

  //   if (this.mForm.invalid) {
  //     console.log("Form Invalido")
  //     return;
  //   }
  //-----------------------------------------------------------------------------------------

    // console.log('Estoy entrando al login, pero solo entrando');
    //   const user: User = new User();
    //   if (this.password != '' && this.email != '') {
    //     user.email = this.email;
    //     user.password = this.password;
    //     console.log(user);
    //     this.usersService.loginUser(user).subscribe(
    //       (data) => {
    //         localStorage.setItem('token', data.access_token);
    //         this.router.navigate(['/perfilParticular']);
    //         console.log("Estoy llegando hasta aqui")
    //       },
    //       (error) => {
    //         console.log('Error:', error);
    //       }
    //     );
    //   }
    // console.log('Login valido', this.mForm.value);

//--------------------------------------------------------------------------------
    // const login: Login = new Login()
    // login.email = this.f.email.value
    // login.password = this.f.password.value
    // console.log(login)

    // this.userService.loginUser(login).subscribe(data => {

    //   localStorage.setItem("token", data.access_token)
    //   this.router.navigate(["/perfilParticular"])
    //   console.log(data)

    // },
    //   error => {
    //     console.log("Error:", error);
    //   }
    // );
//-------------------------------------------------------------------------------

    //   const user: User = new User();
    //   if (this.password != '' && this.email != '') {
    //     user.email = this.email;
    //     user.password = this.password;
    //     console.log(user);
    // atacar a api

  }
}
