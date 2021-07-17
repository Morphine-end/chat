import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesservicesService } from 'src/app/shared/services/gamesservices.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {

  game: any = {};
  id: string = "";

  constructor(private route: ActivatedRoute, private gameService: GamesservicesService) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    console.log(this.id);
    this.loadOneGame()
    /*
    this.game = this.gameService.getGame(this.id);*/
    console.log(this.game);
    
  }

  loadOneGame(){
    this.game = this.gameService.getGame(this.id).subscribe;
  }

}
