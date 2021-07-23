import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any
  private bodyText: string;
  constructor(private router: Router, private authService: AuthService, private modalService: ModalService) { }

  ngOnInit(): void {
    // this.bodyText = 'This text can be updated in modal 1';
  }
  

  logOut() {
    this.authService.SignOutExample();
    
  }
  
  

}
