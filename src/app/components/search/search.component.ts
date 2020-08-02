import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  buscar(termino: string) {
    if(termino.length > 0){

      this.loading = true;
  
      this.spotifyService.getArtistas(termino).subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
      
    }
  }
}
