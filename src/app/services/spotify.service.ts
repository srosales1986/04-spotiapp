import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {

  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQApVel4hTXMeBvs_EEGtatiMntoyRMqRR0_Gz8xQ-qs7wH7ScCmor--B-TwvJC9ET43m0nNfWnNk5lcl7w',
    });

    return this.http.get(url, { headers });

  }

  getNewRealeases() {

    return this.getQuery('browse/new-releases')
              .pipe(map((data) => data['albums'].items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist`)
              .pipe(map((data) => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe(map((data) => data['tracks']));
  }
}
