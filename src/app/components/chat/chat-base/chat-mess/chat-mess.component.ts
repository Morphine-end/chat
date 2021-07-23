import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { ChatMessage } from 'src/app/shared/models/chat-message';

@Component({
  selector: 'app-chat-mess',
  templateUrl: './chat-mess.component.html',
  styleUrls: ['./chat-mess.component.scss']
})
export class ChatMessComponent implements OnInit {

  messageslist: AngularFireList<ChatMessage>;
  

  constructor(public chat: ChatService) {
   
   }

  ngOnInit() {
    
    this.chat.getMessagesPrint().subscribe(()=> {

   console.log() })
   
    
  }

  
}
