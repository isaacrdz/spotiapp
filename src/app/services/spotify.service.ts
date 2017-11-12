import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any [] = [];

  baseURL:String = "https://api.spotify.com/v1/search";
  artistURL:String = "https://api.spotify.com/v1/artists";



  constructor( private http:Http) { }

    getArtists(term:String){
      let headers = new Headers();
      headers.append('authorization', 'Bearer BQB3XmzuqvFjP2h6ylLksPID8miH-0veexrQyTNDn2s_Ryf76tvNPm3Ye2pd3AUieSOhD3j5kBE4QQg9QNI7tA')
      let query = `?q=${term}&type=artist`
      let url = this.baseURL + query;

      return this.http.get(url, { headers })
          .map(res=>{
            // console.log(res.json().artists.items);
            this.artists = res.json().artists.items;
            console.log(this.artists);
          })
    }

    getArtist(id:String){
      let headers = new Headers();
      headers.append('authorization', 'Bearer BQB3XmzuqvFjP2h6ylLksPID8miH-0veexrQyTNDn2s_Ryf76tvNPm3Ye2pd3AUieSOhD3j5kBE4QQg9QNI7tA')
      let query = `/${id}`;
      let url = this.artistURL + query;

      return this.http.get(url, { headers })
          .map(res=>{
            console.log(res.json());
            return res.json();
          })
    }

    getTop(id:String){
      let headers = new Headers();
      headers.append('authorization', 'Bearer BQB3XmzuqvFjP2h6ylLksPID8miH-0veexrQyTNDn2s_Ryf76tvNPm3Ye2pd3AUieSOhD3j5kBE4QQg9QNI7tA')
      let query = `/${id}/top-tracks?country=US`;
      let url = this.artistURL + query;

      return this.http.get(url, { headers })
          .map(res=>{
            console.log(res.json().tracks);
            return res.json().tracks;
          })
    }
}
