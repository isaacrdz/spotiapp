import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  term:String = "";

  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() {}

  searchArtist(){
    // console.log(this.term);
    this._spotifyService.getArtists(this.term)
      .subscribe();
  }

}
