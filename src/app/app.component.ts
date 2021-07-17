import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Games } from './shared/models/game';
import { GamesservicesService } from './shared/services/gamesservices.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectofinal';
  misGames: Array<Games> = []

  constructor(firestore: AngularFirestore, private gamesService: GamesservicesService) {
    this.loadAllGames()
  }

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
