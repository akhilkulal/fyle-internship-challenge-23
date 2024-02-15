import { Component } from '@angular/core';
import { ResponseStoreService } from 'src/app/services/response-store.service';
import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
      image:string='';
      name:string='';
      bio:string='';
      location:string='';
      twitter:string='';
      github:string='';
      

      constructor(private responseService:ResponseStoreService){
        const response = JSON.parse(this.responseService.getItem('body'));
        this.name = response.name;
        this.image = response.avatar_url;
        this.bio = response.bio;
        this.location = response.location;
        this.twitter = 'https://twitter.com/'+response.twitter_username;
        this.github = 'https://github.com/'+response.login;
        console.log(this.bio);
      }

}
