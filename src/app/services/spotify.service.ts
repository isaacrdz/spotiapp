import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any [] = [];

  baseURL:String = "https://api.spotify.com/v1/search"


  constructor( private http:Http) { }

    getArtists(term:String){
      let headers = new Headers();
      headers.append('authorization', 'Bearer BQCQ9PZrkrWiCRpSIwoFFrClFK8wff39p-BBOdjih-3pe-J2eHrxVfGTMOfNB90pG7OvLfFfbtQr0ZDlkY05Jg')
      let query = `?q=${term}&type=artist`
      let url = this.baseURL + query;

      return this.http.get(url, { headers })
          .map(res=>{
            // console.log(res.json().artists.items);
            this.artists = res.json().artists.items;
            console.log(this.artists);
          })
    }
}
