import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MypostService } from '../shared/services/mypost.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {
postForm: FormGroup;
postId?: any;
title = 'cloudSorage';




  constructor(private router: Router,
     private fb: FormBuilder, 
     private myPost: MypostService) {
         this.postForm = this.fb.group({
             
         })
      }

  ngOnInit(): void {
  }







}