import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/pages/services/auth.service';
import { AuthResponse } from '../../pages/interfaces/auth-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);


  ngOnInit(): void {
    this.loginForm = this.fb.group(
       {
         nameUser: ['PabloUser', [Validators.required]],
         password: ['pablo123456', [Validators.required]]
       },
      //Perfil del cliente al cual accedes directamente al home para seleccionar
      //Cualquier casa y empezar a usar la app
      // {
      //   nameUser: ['juan', [Validators.required]],
      //   password: ['123456', [Validators.required]]
      // }
    )

  }
  login() {

    this.authService.login(this.loginForm.value).subscribe((resp: AuthResponse) => {

      if (resp) {
        const authority = resp.authorities[0].authority;


        if (authority === "ROLE_ADMIN") {
          this.router.navigateByUrl("/main/admin");

        }
        else if(authority==="ROLE_USER"){
          this.router.navigateByUrl("/main/home");
        }
      }
    })

  }

}
