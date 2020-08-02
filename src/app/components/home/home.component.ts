import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nuevosAlbums: any[] = [];
  loading: boolean    =  true;
  error               = false;
  errorMessage: string = '';

  constructor(private spotifyService: SpotifyService) {
    spotifyService.getNewRealeases().subscribe((data: any) => {
      this.nuevosAlbums = data;
      this.loading = false;
    }, (errorService) => {
      this.loading = false;
      this.errorMessage = errorService.error.error.message;
      this.error = true;
      
    });
  }
}
