import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '@core/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private _AuthService: AuthService,
    private responsive: BreakpointObserver
  ) { }
  ngOnInit(): void {
    this._AuthService.checkSession(true, true)
    .then(a => this.router.navigate(['/']));

  
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }

  sendLogin(): void {

    this._AuthService.login(this.formLogin.value).then(res => {
      console.log(res)
      this.router.navigate(['/']).then();
    }).catch(() => {
      //this.loading = false
    })
    //console.log(body)



  }
}
