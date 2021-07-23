import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  email: string;
  password: string;

  errorMsg: string


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpExample() {
    this.authService.singUpEmailPassword(this.email, this.password)

  }


}