import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modals: any[] = [];

  add(modal: any) {
     this.modals.push(modal);
 }

 remove(id: string) {
     this.modals = this.modals.filter(x => x.id !== id);
 }

 
}
