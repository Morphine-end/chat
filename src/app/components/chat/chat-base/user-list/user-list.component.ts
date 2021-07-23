import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ChatService } from 'src/app/shared/services/chat.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(chat: ChatService) {
    chat.getUsers().subscribe(users => {
      this.users = users;
    });
  }


  ngOnInit(): void {
  }

}
