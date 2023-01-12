import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '@modules/auth/services/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
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
    this.responsive.observe(Breakpoints.HandsetLandscape)
    .subscribe(result => {

      if (result.matches) {
        console.log("screens matches HandsetLandscape");
      }

});
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
    const {email,password} = this.formLogin.value;
    this._AuthService.sendCredentials(email,password)
    //console.log(body)

    this.router.navigate(['/'])

  }
}
