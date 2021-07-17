import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  @Input() id: string;
    private element: any;
     @ViewChild('login') ModalSign: ElementRef
  
  constructor(private router: Router, 
    public authService: AuthService, 
    private afAuth: AngularFireAuth, 
    private fb: FormBuilder, 
    private ngZone: NgZone,
    private modalService: ModalService,
    private el: ElementRef) {
      this.element = el.nativeElement
     }

  ngOnInit(): void {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
        console.error('modal must have an id');
        return;
    }
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
}

// remove self from modal service when directive is destroyed
ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
}



}
   

