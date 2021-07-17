import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Games } from 'src/app/shared/models/game';
import { GamesservicesService } from 'src/app/shared/services/gamesservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  misGames: Array<Games> = []

  constructor( private router: Router, private firestore: AngularFirestore, private gamesService: GamesservicesService) {
    this.loadAllGames()
   }

  ngOnInit(): void {
  }

  // Función para importar la base de datos a una variable llamada misGames
  loadAllGames(){
    this.gamesService.readGames().subscribe(data => {
      data.forEach((doc:any) => {
        let myGame: Games = doc.data()
        myGame.uid = doc.id
        this.misGames.push(myGame)
      })
    })
  }



}
